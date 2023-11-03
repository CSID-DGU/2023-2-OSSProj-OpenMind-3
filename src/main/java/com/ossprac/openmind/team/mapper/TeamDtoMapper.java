package com.ossprac.openmind.team.mapper;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Component;

import com.ossprac.openmind.team.dto.res.TeamResponse;
import com.ossprac.openmind.team.entity.UserTeam;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class TeamDtoMapper {
	public List<TeamResponse> fromEntity(List<UserTeam> userTeams) {
		return userTeams.stream()
			.map(userTeam -> new TeamResponse(userTeam.getTeam().getId(), userTeam.getTeam().getName(), userTeam.isAccepted()))
			.collect(Collectors.toList());
	}
}
