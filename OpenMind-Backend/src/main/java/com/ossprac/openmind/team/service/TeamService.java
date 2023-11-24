package com.ossprac.openmind.team.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ossprac.openmind.global.util.UserUtils;
import com.ossprac.openmind.team.dto.req.TeamCreateRequest;
import com.ossprac.openmind.team.dto.req.TeamInvitationRequest;
import com.ossprac.openmind.team.dto.res.TeamCreateResponse;
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
		Team team = teamEntityMapper.toTeamEntity(request);
		Team savedTeam = teamRepository.save(team);

		addMember(savedTeam, userUtils.getUser());
		return teamDtoMapper.toTeamCreateResponse(team);
	}

	public TeamMemberResponse getMembers(Long teamId) {
		Team team = teamRepository.findById(teamId).orElseThrow();
		List<User> users = userTeamRepository.findAllByTeam(team);
		return teamDtoMapper.toTeamMemberResponse(team, users);
	}

	public List<UserTeam> inviteMember(TeamInvitationRequest request) {
		return userTeamRepository.saveAll(teamEntityMapper.toUserTeamEntity(request));
	}

	private void addMember(Team team, User user) {
		userTeamRepository.save(new UserTeam(team, user));
	}
}
