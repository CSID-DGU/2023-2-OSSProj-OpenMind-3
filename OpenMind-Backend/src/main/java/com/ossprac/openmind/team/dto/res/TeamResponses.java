package com.ossprac.openmind.team.dto.res;

import java.util.List;

import lombok.Getter;

@Getter
public class TeamResponses {
	private List<TeamResponse> teamResponses;

	public TeamResponses(List<TeamResponse> teamResponses) {
		this.teamResponses = teamResponses;
	}
}
