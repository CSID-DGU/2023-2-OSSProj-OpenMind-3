package com.ossprac.openmind.team.dto.res;

import com.ossprac.openmind.lecture.entity.DaysOfWeek;
import lombok.Getter;

import java.time.LocalTime;

@Getter
public class TeamScheduleResponse {
    private DaysOfWeek daysOfWeek;
    private LocalTime startTime;
    private LocalTime endTime;

    public TeamScheduleResponse(DaysOfWeek daysOfWeek, LocalTime startTime, LocalTime endTime) {
        this.daysOfWeek = daysOfWeek;
        this.startTime = startTime;
        this.endTime = endTime;
    }
}
