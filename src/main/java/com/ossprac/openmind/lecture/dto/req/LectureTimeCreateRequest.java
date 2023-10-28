package com.ossprac.openmind.lecture.dto.req;

import java.time.LocalTime;

import com.ossprac.openmind.lecture.entity.DaysOfWeek;

public class LectureTimeCreateRequest {
	private final DaysOfWeek daysOfWeek;
	private final LocalTime startTime;
	private final LocalTime endTime;

	public LectureTimeCreateRequest(DaysOfWeek daysOfWeek, LocalTime startTime, LocalTime endTime) {
		this.daysOfWeek = daysOfWeek;
		this.startTime = startTime;
		this.endTime = endTime;
	}
}
