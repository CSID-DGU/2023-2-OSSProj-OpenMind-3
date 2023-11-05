package com.ossprac.openmind.team.dto.req;

import com.ossprac.openmind.lecture.entity.Lecture;
import com.ossprac.openmind.lecture.repository.LectureRepository;
import com.ossprac.openmind.team.entity.Team;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class TeamCreateRequest {
	private Long lectureId;
	private String teamName;

	public static Team toEntity(Lecture lecture, String name) {
		return new Team(lecture, name);
	}
}
