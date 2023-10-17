package com.ossprac.openmind.user.service;

import static com.ossprac.openmind.global.util.UserUtils.*;

import java.time.Duration;

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
		securityUtils.setAuthentication(requestId, requestPassword);
		TokenResponse tokenResponse = createAndSetToken(requestId);

		return LoginResponse.from(user.getId(), tokenResponse.getAtk(), tokenResponse.getRtk());
	}

	private TokenResponse createAndSetToken(String requestId) {
		String atk = jwtTokenProvider.createToken(requestId);
		String rtk = jwtTokenProvider.createRefreshToken(requestId);
		redisUtils.setValues(requestId, rtk, Duration.ofDays(14));

		return TokenResponse.from(atk, rtk);
	}
}
