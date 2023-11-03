package com.ossprac.openmind.team.mapper;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Component;

import com.ossprac.openmind.team.dto.res.NotificationResponse;
import com.ossprac.openmind.team.entity.UserTeam;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class TeamDtoMapper {
	public List<NotificationResponse> toNotificationResponses(List<UserTeam> userTeams) {
		return userTeams.stream()
			.map(userTeam -> toNotificationResponse(userTeam))
			.collect(Collectors.toList());
	}

	public NotificationResponse toNotificationResponse(UserTeam userTeam) {
		return new NotificationResponse(
			userTeam.getId(),
			userTeam.getTeam().getId(),
			userTeam.getTeam().getName(),
			userTeam.isAccepted());
	}
}
