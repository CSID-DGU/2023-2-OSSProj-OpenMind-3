package com.ossprac.openmind.lecture.dto.req;

import java.time.LocalTime;

import com.ossprac.openmind.lecture.entity.DaysOfWeek;

import lombok.Getter;

@Getter
public class LectureTimeCreateRequest {
	private final DaysOfWeek daysOfWeek;
	private final LocalTime startTime;
	private final LocalTime endTime;

	public LectureTimeCreateRequest(String daysOfWeek, LocalTime startTime, LocalTime endTime) {
		this.daysOfWeek = DaysOfWeek.from(daysOfWeek);
		this.startTime = startTime;
		this.endTime = endTime;
	}
}
