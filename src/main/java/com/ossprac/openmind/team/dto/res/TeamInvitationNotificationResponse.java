package com.ossprac.openmind.team.dto.res;

import java.util.List;

import lombok.Getter;

@Getter
public class TeamInvitationNotificationResponse {
	private List<TeamResponse> teamResponses;

	public TeamInvitationNotificationResponse(List<TeamResponse> teamResponses) {
		this.teamResponses = teamResponses;
	}
}
