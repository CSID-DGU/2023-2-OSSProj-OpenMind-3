package com.ossprac.openmind.team.dto.req;

import com.ossprac.openmind.lecture.entity.DaysOfWeek;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalTime;

@Getter
@NoArgsConstructor
public class TeamScheduleAddRequest {
    private Long teamId;
    private DaysOfWeek daysOfWeek;
    private LocalTime startTime;
    private LocalTime endTime;
}
