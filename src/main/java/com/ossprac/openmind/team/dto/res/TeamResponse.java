package com.ossprac.openmind.team.dto.res;

import lombok.Getter;

@Getter
public class TeamResponse {
	private Long teamId;
	private String teamName;
	private boolean acceptance;

	public TeamResponse(Long teamId, String teamName, boolean acceptance) {
		this.teamId = teamId;
		this.teamName = teamName;
		this.acceptance = acceptance;
	}
}
