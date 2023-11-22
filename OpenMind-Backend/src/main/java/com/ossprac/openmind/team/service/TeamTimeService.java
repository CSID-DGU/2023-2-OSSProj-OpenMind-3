package com.ossprac.openmind.team.service;

import com.ossprac.openmind.lecture.entity.LectureTime;
import com.ossprac.openmind.lecture.repository.LectureTimeRepository;
import com.ossprac.openmind.team.entity.TeamTime;
import com.ossprac.openmind.team.entity.UserTeam;
import com.ossprac.openmind.team.repository.TeamTimeRepository;
import com.ossprac.openmind.user.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TeamTimeService {
    private final LectureTimeRepository lectureTimeRepository;
    private final TeamTimeRepository teamTimeRepository;

    public void setPersonalLectureTime(List<UserTeam> userTeams) {
        userTeams.stream().forEach(this::setTeamTime);
    }

    private void setTeamTime(UserTeam userTeam) {
        List<LectureTime> lectureTimes = getPersonalLectureTime(userTeam.getUser());
        List<TeamTime> teamTimes = lectureTimes.stream()
                .map(lectureTime -> TeamTime.of(lectureTime.getDaysOfWeek(), lectureTime.getStartTime(), lectureTime.getEndTime(), userTeam))
                .collect(Collectors.toList());

        teamTimeRepository.saveAll(teamTimes);
    }

    private List<LectureTime> getPersonalLectureTime(User user) {
        return lectureTimeRepository.findUserLectureTime(user.getId());
    }

}
