package com.ossprac.openmind.lecture.dto.req;

import java.time.LocalTime;

import com.ossprac.openmind.lecture.entity.DaysOfWeek;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class LectureTimeCreateRequest {
	private DaysOfWeek daysOfWeek;
	private LocalTime startTime;
	private LocalTime endTime;
}
