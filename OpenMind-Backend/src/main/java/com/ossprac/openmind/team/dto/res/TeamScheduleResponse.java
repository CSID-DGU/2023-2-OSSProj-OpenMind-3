package com.ossprac.openmind.team.dto.res;

import com.ossprac.openmind.lecture.entity.DaysOfWeek;
import lombok.Getter;

import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

@Getter
public class TeamScheduleResponse {
    private DaysOfWeek daysOfWeek;
    private String startTime;
    private String endTime;

    public TeamScheduleResponse(DaysOfWeek daysOfWeek, LocalTime startTime, LocalTime endTime) {
        this.daysOfWeek = daysOfWeek;
        this.startTime = formatLocalTime(startTime);
        this.endTime = formatLocalTime(endTime);
    }

    private String formatLocalTime(LocalTime localTime) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm");
        return localTime.format(formatter);
    }
}
