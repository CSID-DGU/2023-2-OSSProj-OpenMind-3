package com.ossprac.openmind.user.service;

import static com.ossprac.openmind.global.util.UserUtils.*;

import java.time.Duration;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import com.ossprac.openmind.global.config.jwt.JwtTokenProvider;
import com.ossprac.openmind.global.util.UserUtils;
import com.ossprac.openmind.user.dto.req.LoginRequest;
import com.ossprac.openmind.user.dto.res.LoginResponse;
import com.ossprac.openmind.user.dto.res.TokenResponse;
import com.ossprac.openmind.user.entity.User;
import com.ossprac.openmind.global.util.RedisUtils;
import com.ossprac.openmind.global.util.SecurityUtils;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {

	private final SecurityUtils securityUtils;
	private final JwtTokenProvider jwtTokenProvider;
	private final RedisUtils redisUtils;
	private final UserUtils userUtils;
	private final UserValidationService userValidationService;

	public LoginResponse login(LoginRequest loginRequest) {

		final String requestId = loginRequest.getId();
		final String requestPassword = loginRequest.getPassword();

		User user = userUtils.findUser(requestId);
		userValidationService.validatePassword(user, requestPassword);
		Authentication authentication = securityUtils.setAuthentication(requestId, requestPassword);
		TokenResponse tokenResponse = createAndSetToken(authentication);

		return LoginResponse.from(user.getId(), user.getName(), tokenResponse.getAtk(), tokenResponse.getRtk());
	}

	private TokenResponse createAndSetToken(Authentication authentication) {
		String atk = jwtTokenProvider.createToken(authentication);
		String rtk = jwtTokenProvider.createRefreshToken(authentication.getName());
		redisUtils.setValues(authentication.getName(), rtk, Duration.ofDays(14));

		return TokenResponse.from(atk, rtk);
	}
}
