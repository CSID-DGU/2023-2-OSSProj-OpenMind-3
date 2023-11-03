package com.ossprac.openmind.team.dto.res;

import lombok.Getter;

@Getter
public class NotificationResponse {
	private Long notificationId;
	private Long teamId;
	private String teamName;
	private boolean acceptance;

	public NotificationResponse(Long notificationId, Long teamId, String teamName, boolean acceptance) {
		this.notificationId = notificationId;
		this.teamId = teamId;
		this.teamName = teamName;
		this.acceptance = acceptance;
	}
}
