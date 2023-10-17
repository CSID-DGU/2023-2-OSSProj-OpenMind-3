package com.ossprac.openmind.global.util;

import org.springframework.stereotype.Component;

import com.ossprac.openmind.global.error.BaseException;
import com.ossprac.openmind.global.error.ErrorCode;
import com.ossprac.openmind.user.entity.User;
import com.ossprac.openmind.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class UserUtils {
	private final UserRepository userRepository;

	public User findUser(String requestId) {
		return userRepository.findByStudentId(requestId)
			.orElseThrow(() -> new BaseException(ErrorCode.USER_NOT_FOUND));
	}
}
