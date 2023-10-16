package com.ossprac.openmind.global.config.jwt;

import java.security.Key;
import java.util.Arrays;
import java.util.Collection;
import java.util.stream.Collectors;

import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Component;

import com.ossprac.openmind.global.error.BaseException;
import com.ossprac.openmind.global.error.ErrorCode;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtTokenProvider implements InitializingBean {

	private Key key;
	private static final String AUTHORITIES_KEY = "auth";
	private final String secret;
	private final long tokenValidityInMilliseconds;
	private final long refreshTokenValidityInMilliseconds;

	public JwtTokenProvider(
		@Value("${jwt.secret}") String secret,
		@Value("${jwt.token-validity-in-seconds}") long tokenValidityInSeconds,
		@Value("${jwt.refresh-token-validity-in-seconds}") long refreshTokenValidityInSeconds) {
		this.secret = secret;
		this.tokenValidityInMilliseconds = tokenValidityInSeconds;
		this.refreshTokenValidityInMilliseconds = refreshTokenValidityInSeconds;
	}

	public boolean validateToken(String token) {
		try {
			Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
			return true;
		} catch (io.jsonwebtoken.security.SecurityException | MalformedJwtException e) {
			throw new BaseException(ErrorCode.INVALID_TOKEN);
		} catch (ExpiredJwtException e) {
			throw new BaseException(ErrorCode.EXPIRED_TOKEN);
		} catch (IllegalArgumentException e) {
			throw new BaseException(ErrorCode.INVALID_TOKEN);
		}
	}

	public Authentication getAuthentication(String token) {
		Claims claims = Jwts
			.parserBuilder()
			.setSigningKey(key)
			.build()
			.parseClaimsJws(token)
			.getBody();

		Collection<? extends GrantedAuthority> authorities =
			Arrays.stream(claims.get(AUTHORITIES_KEY).toString().split(","))
				.map(SimpleGrantedAuthority::new)
				.collect(Collectors.toList());

		User principal = new User(claims.getSubject(), "", authorities);

		return new UsernamePasswordAuthenticationToken(principal, token, authorities);
	}

	@Override
	public void afterPropertiesSet() {
		byte[] keyBytes = Decoders.BASE64.decode(secret);
		this.key = Keys.hmacShaKeyFor(keyBytes);
	}
}
