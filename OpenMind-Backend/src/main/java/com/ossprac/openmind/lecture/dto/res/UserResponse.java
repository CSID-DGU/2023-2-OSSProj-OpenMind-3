package com.ossprac.openmind.lecture.dto.res;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UserResponse {
	private Long userId;
	private String name;
	private String major;
	private String studentId;

	@Builder
	public UserResponse(Long userId, String name, String major, String studentId) {
		this.userId = userId;
		this.name = name;
		this.major = major;
		this.studentId = encrypt(studentId);
	}

	private String encrypt(String studentId) {
		return studentId.replaceAll("(\\w{4})$", "****");
	}
}
