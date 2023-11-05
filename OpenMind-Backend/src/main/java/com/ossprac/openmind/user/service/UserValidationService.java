package com.ossprac.openmind.user.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ossprac.openmind.global.error.BaseException;
import com.ossprac.openmind.global.error.ErrorCode;
import com.ossprac.openmind.user.entity.User;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserValidationService {

	private final PasswordEncoder passwordEncoder;
	public void validatePassword(User user, String requestPassword) {
		if(!passwordEncoder.matches(requestPassword,user.getPassword())) {
			throw new BaseException(ErrorCode.UNAUTHORIZED_USER);
		}
	}
}
