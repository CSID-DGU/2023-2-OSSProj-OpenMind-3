package com.ossprac.openmind.team.dto.res;

import lombok.Getter;

import java.util.List;

@Getter
public class PersonalScheduleResponse {

    private List<TeamScheduleResponse> teamScheduleResponses;

    public PersonalScheduleResponse(List<TeamScheduleResponse> teamScheduleResponses) {
        this.teamScheduleResponses = teamScheduleResponses;
    }
}
