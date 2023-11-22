package com.ossprac.openmind.team.dto.res;

import lombok.Getter;

import java.util.List;

@Getter
public class PersonalScheduleResponse {

    private List<TeamScheduleResponse> teamTimeRespons;

    public PersonalScheduleResponse(List<TeamScheduleResponse> teamTimeRespons) {
        this.teamTimeRespons = teamTimeRespons;
    }
}
