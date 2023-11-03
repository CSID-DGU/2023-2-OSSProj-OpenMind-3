package com.ossprac.openmind.team.dto.res;

import java.util.List;

import com.ossprac.openmind.lecture.dto.res.UserResponse;

import lombok.Getter;

@Getter
public class TeamMemberResponse {
	private Long teamId;
	private String teamName;
	private List<UserResponse> userResponses;

	public TeamMemberResponse(Long teamId, String teamName, List<UserResponse> userResponses) {
		this.teamId = teamId;
		this.teamName = teamName;
		this.userResponses = userResponses;
	}
}
