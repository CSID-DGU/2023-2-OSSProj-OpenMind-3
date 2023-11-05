package com.ossprac.openmind.team.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.ossprac.openmind.global.util.UserUtils;
import com.ossprac.openmind.lecture.entity.Lecture;
import com.ossprac.openmind.lecture.repository.LectureRepository;
import com.ossprac.openmind.team.dto.req.TeamCreateRequest;
import com.ossprac.openmind.team.dto.req.TeamInvitationRequest;
import com.ossprac.openmind.team.dto.res.TeamCreateResponse;
import com.ossprac.openmind.team.dto.res.TeamMemberResponse;
import com.ossprac.openmind.team.dto.res.TeamResponse;
import com.ossprac.openmind.team.dto.res.TeamResponses;
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

	public TeamMemberResponse getMembers(Long teamId) {
		Team team = teamRepository.findById(teamId).orElseThrow();
		List<User> users = userTeamRepository.findAllByTeam(team);
		return new TeamMemberResponse(
			team.getId(),
			team.getName(),
			teamDtoMapper.toUserResponses(users));
	}

	private void addMember(Team team, User user) {
		userTeamRepository.save(new UserTeam(team, user));
	}

	public void inviteMember(TeamInvitationRequest request) {
		userTeamRepository.saveAll(teamEntityMapper.toUserTeamEntity(request));
	}
}
