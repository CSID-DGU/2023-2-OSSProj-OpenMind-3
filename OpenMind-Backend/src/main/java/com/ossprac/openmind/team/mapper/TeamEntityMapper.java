package com.ossprac.openmind.team.mapper;

import java.util.List;
import java.util.stream.Collectors;

import com.ossprac.openmind.lecture.entity.LectureTime;
import com.ossprac.openmind.team.dto.req.TeamScheduleAddRequest;
import com.ossprac.openmind.team.dto.req.TeamScheduleDeleteRequest;
import com.ossprac.openmind.team.entity.TeamSchedule;
import org.springframework.stereotype.Component;

import com.ossprac.openmind.lecture.entity.Lecture;
import com.ossprac.openmind.lecture.repository.LectureRepository;
import com.ossprac.openmind.team.dto.req.TeamCreateRequest;
import com.ossprac.openmind.team.dto.req.TeamInvitationRequest;
import com.ossprac.openmind.team.entity.Team;
import com.ossprac.openmind.team.entity.UserTeam;
import com.ossprac.openmind.team.repository.TeamRepository;
import com.ossprac.openmind.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class TeamEntityMapper {
	private final LectureRepository lectureRepository;
	private final UserRepository userRepository;
	private final TeamRepository teamRepository;
	public Team toTeamEntity(TeamCreateRequest request) {
		Lecture lecture = lectureRepository.findById(request.getLectureId()).orElseThrow();
		String name = request.getTeamName();
		return new Team(lecture, name);
	}

	public List<UserTeam> toUserTeamEntity(TeamInvitationRequest request) {
		Team team = teamRepository.findById(request.getTeamId()).orElseThrow();
		List<UserTeam> userTeams = createUserTeam(team, request.getMembersId());
		return userTeams;
	}

	public TeamSchedule toTeamScheduleEntity(LectureTime lectureTime, UserTeam userTeam) {
		return TeamSchedule.of(lectureTime.getDaysOfWeek(), lectureTime.getStartTime(), lectureTime.getEndTime(), userTeam);
	}

	public TeamSchedule toTeamScheduleEntity(TeamScheduleAddRequest teamScheduleAddRequest, UserTeam userTeam) {
		return TeamSchedule.of(teamScheduleAddRequest.getDaysOfWeek(), teamScheduleAddRequest.getStartTime(),
				teamScheduleAddRequest.getEndTime(), userTeam);
	}

	private List<UserTeam> createUserTeam(Team team, List<Long> membersId) {
		return membersId.stream()
			.map(id -> userRepository.findById(id).orElseThrow())
			.map(user -> TeamInvitationRequest.toEntity(team, user))
			.collect(Collectors.toList());
	}
}
