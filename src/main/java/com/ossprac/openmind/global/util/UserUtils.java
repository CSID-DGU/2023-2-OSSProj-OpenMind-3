package com.ossprac.openmind.global.util;

import static com.ossprac.openmind.global.error.ErrorCode.*;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import com.ossprac.openmind.global.error.BaseException;
import com.ossprac.openmind.user.entity.User;
import com.ossprac.openmind.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class UserUtils {
	private final UserRepository userRepository;

	public User findUser(String studentId) {
		return userRepository.findByStudentId(studentId)
			.orElseThrow(() -> new BaseException(USER_NOT_FOUND));
	}

	private String getCurrentUser() {
		final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		if (authentication == null || authentication.getName() == null) {
			throw new RuntimeException("No authentication information.");
		}
		return authentication.getName();
	}

	public User getUser() {
		return userRepository.findByStudentId(getCurrentUser())
			.orElseThrow(() -> new BaseException(USER_NOT_FOUND));
	}
}
