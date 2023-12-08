package com.ossprac.openmind.lecture.entity;

import com.fasterxml.jackson.annotation.JsonCreator;

import lombok.Getter;

@Getter
public enum DaysOfWeek {
	Mon("월요일"),
	Tue("화요일"),
	Wed("수요일"),
	Thu("목요일"),
	Fri("금요일"),
	Sat("토요일"),
	Sun("일요일");

	private String value;

	DaysOfWeek(String value) {
		this.value = value;
	}
	@JsonCreator
	public static DaysOfWeek from(String value) {
		for (DaysOfWeek daysOfWeek : DaysOfWeek.values()) {
			if (daysOfWeek.getValue().equals(value)) {
				return daysOfWeek;
			}
		}
		return null;
	}
}
