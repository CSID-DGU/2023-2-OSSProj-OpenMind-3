package com.ossprac.openmind.team.dto.res;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Getter
@NoArgsConstructor
public class TeamCreateResponse {
	private Long teamId;
	private String name;

	public TeamCreateResponse(Long teamId, String name) {
		this.teamId = teamId;
		this.name = name;
	}
}
