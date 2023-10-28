package com.ossprac.openmind.lecture.dto.req;

import java.util.List;

public class LectureCreateRequest {
	private final String name;
	private final List<LectureTimeCreateRequest> lectureTimeList;

	public LectureCreateRequest(String name, List<LectureTimeCreateRequest> lectureTimeList) {
		this.name = name;
		this.lectureTimeList = lectureTimeList;
	}
}
