package com.ossprac.openmind.team.dto.res;

import java.time.LocalTime;

public class LectureTimeResponse {
    private String daysOfWeek;
    private LocalTime startTime;
    private LocalTime endTime;

    public LectureTimeResponse(String daysOfWeek, LocalTime startTime, LocalTime endTime) {
        this.daysOfWeek = daysOfWeek;
        this.startTime = startTime;
        this.endTime = endTime;
    }
}
