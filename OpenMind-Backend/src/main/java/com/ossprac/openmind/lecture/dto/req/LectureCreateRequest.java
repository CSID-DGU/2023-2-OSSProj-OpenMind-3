package com.ossprac.openmind.lecture.dto.req;

import java.util.List;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class LectureCreateRequest {
	private String name;
	private List<LectureTimeCreateRequest> lectureTimeList;
}
