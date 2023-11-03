package com.ossprac.openmind.team.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ossprac.openmind.global.util.UserUtils;
import com.ossprac.openmind.team.dto.req.TeamCreateRequest;
import com.ossprac.openmind.team.dto.req.TeamInvitationRequest;
import com.ossprac.openmind.team.dto.res.TeamCreateResponse;
import com.ossprac.openmind.team.dto.res.TeamInvitationNotificationResponse;
import com.ossprac.openmind.team.dto.res.NotificationResponse;
import com.ossprac.openmind.team.dto.res.TeamMemberResponse;
import com.ossprac.openmind.team.entity.Team;
import com.ossprac.openmind.team.entity.UserTeam;
import com.ossprac.openmind.team.mapper.TeamDtoMapper;
import com.ossprac.openmind.team.mapper.TeamEntityMapper;
import com.ossprac.openmind.team.repository.TeamRepository;
import com.ossprac.openmind.team.repository.UserTeamRepository;
import com.ossprac.openmind.user.entity.User;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TeamService {
	private final TeamRepository teamRepository;
	private final UserTeamRepository userTeamRepository;
	private final TeamEntityMapper teamEntityMapper;
	private final TeamDtoMapper teamDtoMapper;
	private final UserUtils userUtils;

	public TeamCreateResponse createTeam(TeamCreateRequest request) {
		Team team = teamRepository.save(teamEntityMapper.toTeamEntity(request));
		addMember(team, userUtils.getUser());
		return new TeamCreateResponse(team.getId(), team.getName());
	}

	public TeamMemberResponse getMembers() {
		List<UserTeam> userTeams = getSameUserTeams();
		return new TeamMemberResponse(
			userTeams.get(0).getTeam().getId(),
			userTeams.get(0).getTeam().getName(),
			teamDtoMapper.toUserResponses(userTeams));
	}

	private List<UserTeam> getSameUserTeams() {
		UserTeam userTeam = userTeamRepository.findByUser(userUtils.getUser());
		Team team = userTeam.getTeam();
		return userTeamRepository.findAllByTeamAndAcceptedIsTrue(team);
	}

	private void addMember(Team team, User user) {
		userTeamRepository.save(new UserTeam(team, user));
	}

	public void inviteMember(TeamInvitationRequest request) {
		userTeamRepository.saveAll(teamEntityMapper.toUserTeamEntity(request));
	}
}
