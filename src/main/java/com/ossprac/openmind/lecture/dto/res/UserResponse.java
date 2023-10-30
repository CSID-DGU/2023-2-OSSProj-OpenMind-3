package com.ossprac.openmind.lecture.dto.res;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UserResponse {
	private String name;
	private String major;
	private String studentId;

	@Builder
	public UserResponse(String name, String major, String studentId) {
		this.name = name;
		this.major = major;
		this.studentId = studentId;
	}
}
