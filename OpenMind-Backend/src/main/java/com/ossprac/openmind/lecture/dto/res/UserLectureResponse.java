package com.ossprac.openmind.lecture.dto.res;

import java.util.List;

import lombok.Getter;

@Getter
public class UserLectureResponse {
	private List<LectureResponse> lectureList;

	public UserLectureResponse(List<LectureResponse> lectureList) {
		this.lectureList = lectureList;
	}
}
