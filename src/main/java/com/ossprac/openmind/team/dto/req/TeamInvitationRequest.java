package com.ossprac.openmind.team.dto.req;

import java.util.List;

import com.ossprac.openmind.lecture.entity.Lecture;
import com.ossprac.openmind.team.entity.Team;
import com.ossprac.openmind.team.entity.UserTeam;
import com.ossprac.openmind.user.entity.User;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class TeamInvitationRequest {
	private Long teamId;
	private List<Long> membersId;

	public static UserTeam toEntity(Team team, User user) {
		return new UserTeam(team, user);
	}
}
