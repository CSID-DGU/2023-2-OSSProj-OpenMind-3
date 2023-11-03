package com.ossprac.openmind.team.dto.res;

import java.util.List;

import lombok.Getter;

@Getter
public class TeamInvitationNotificationResponse {
	private List<NotificationResponse> notificationRespons;

	public TeamInvitationNotificationResponse(List<NotificationResponse> notificationRespons) {
		this.notificationRespons = notificationRespons;
	}
}
