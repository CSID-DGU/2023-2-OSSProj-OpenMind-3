package com.ossprac.openmind.lecture.dto.res;

import lombok.Getter;

@Getter
public class LectureResponse {
	private Long id;
	private String name;

	public LectureResponse(Long id, String name) {
		this.id = id;
		this.name = name;
	}
}
