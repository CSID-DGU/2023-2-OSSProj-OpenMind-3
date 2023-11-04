package com.ossprac.openmind.team.mapper;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Component;

import com.ossprac.openmind.lecture.dto.res.UserResponse;
import com.ossprac.openmind.team.dto.res.TeamResponse;
import com.ossprac.openmind.team.dto.res.TeamResponses;
import com.ossprac.openmind.team.entity.Team;
import com.ossprac.openmind.team.entity.UserTeam;
import com.ossprac.openmind.user.entity.User;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class TeamDtoMapper {

	public List<TeamResponse> toTeamResponses(List<Team> teams) {
		return teams.stream()
			.map(team -> new TeamResponse(team.getId(), team.getName()))
			.collect(Collectors.toList());
	}

	public List<UserResponse> toUserResponses(List<User> users) {
		return users.stream()
			.map(user -> new UserResponse(user.getName(), user.getMajor(), user.getStudentId()))
			.collect(Collectors.toList());
	}
}
