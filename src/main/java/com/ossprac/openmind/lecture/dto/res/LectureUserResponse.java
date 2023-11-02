package com.ossprac.openmind.lecture.dto.res;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class LectureUserResponse {
	private List<UserResponse> userList;
}
