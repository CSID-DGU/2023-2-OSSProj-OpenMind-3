package com.ossprac.openmind.team.service;

import org.springframework.stereotype.Service;

import com.ossprac.openmind.lecture.entity.Lecture;
import com.ossprac.openmind.lecture.repository.LectureRepository;
import com.ossprac.openmind.team.dto.req.TeamCreateRequest;
import com.ossprac.openmind.team.dto.res.TeamCreateResponse;
import com.ossprac.openmind.team.entity.Team;
import com.ossprac.openmind.team.repository.TeamRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TeamService {
	private final TeamRepository teamRepository;
	private final LectureRepository lectureRepository;

	public TeamCreateResponse createTeam(TeamCreateRequest request) {
		Team team = teamRepository.save(toEntity(request));
		return new TeamCreateResponse(team.getId(), team.getName());
	}

	private Team toEntity(TeamCreateRequest request) {
		Lecture lecture = lectureRepository.findById(request.getLectureId()).orElseThrow();
		String name = request.getTeamName();
		return new Team(lecture, name);
	}

}
