package com.ossprac.openmind.team.mapper;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Component;

import com.ossprac.openmind.lecture.dto.res.UserResponse;
import com.ossprac.openmind.team.dto.res.TeamResponse;
import com.ossprac.openmind.team.dto.res.TeamResponses;
import com.ossprac.openmind.team.entity.Team;
import com.ossprac.openmind.team.entity.UserTeam;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class TeamDtoMapper {
	public List<UserResponse> toUserResponses(List<UserTeam> userTeams) {
		return userTeams.stream()
			.map(userTeam -> toUserResponse(userTeam))
			.collect(Collectors.toList());
	}

	public UserResponse toUserResponse(UserTeam userTeam) {
		return new UserResponse(
			userTeam.getUser().getName(),
			userTeam.getUser().getMajor(),
			userTeam.getUser().getStudentId());
	}

	public List<TeamResponse> toTeamResponses(List<Team> teams) {
		return teams.stream()
			.map(team -> new TeamResponse(team.getId(), team.getName()))
			.collect(Collectors.toList());
	}
}
