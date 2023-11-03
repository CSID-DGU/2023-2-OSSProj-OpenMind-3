package com.ossprac.openmind.team.dto.res;

import lombok.Getter;

@Getter
public class TeamResponse {
	private Long teamId;
	private String teamName;

	public TeamResponse(Long teamId, String teamName) {
		this.teamId = teamId;
		this.teamName = teamName;
	}
}
