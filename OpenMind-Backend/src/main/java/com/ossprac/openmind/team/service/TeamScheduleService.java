package com.ossprac.openmind.team.service;

import com.ossprac.openmind.global.util.UserUtils;
import com.ossprac.openmind.lecture.entity.LectureTime;
import com.ossprac.openmind.lecture.repository.LectureTimeRepository;
import com.ossprac.openmind.team.dto.res.PersonalScheduleResponse;
import com.ossprac.openmind.team.entity.Team;
import com.ossprac.openmind.team.entity.TeamSchedule;
import com.ossprac.openmind.team.entity.UserTeam;
import com.ossprac.openmind.team.repository.TeamRepository;
import com.ossprac.openmind.team.repository.TeamScheduleRepository;
import com.ossprac.openmind.team.repository.UserTeamRepository;
import com.ossprac.openmind.user.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TeamScheduleService {
    private final LectureTimeRepository lectureTimeRepository;
    private final TeamScheduleRepository teamTimeRepository;
    private final UserTeamRepository userTeamRepository;
    private final TeamRepository teamRepository;
    private final UserUtils userUtils;

    public void setPersonalLectureTime(List<UserTeam> userTeams) {
        userTeams.stream().forEach(this::setTeamTime);
    }

    public PersonalScheduleResponse getPersonalSchedule(Long teamId) {
        Team team = teamRepository.findById(teamId).orElseThrow();
        UserTeam userTeam = userTeamRepository.findByTeamAndUser(team, userUtils.getUser());

        return new PersonalScheduleResponse(userTeamRepository.findAllByUserTeam(userTeam));
    }

    private void setTeamTime(UserTeam userTeam) {
        List<LectureTime> lectureTimes = getPersonalLectureTime(userTeam.getUser());
        List<TeamSchedule> teamTimes = lectureTimes.stream()
                .map(lectureTime -> TeamSchedule.of(lectureTime.getDaysOfWeek(), lectureTime.getStartTime(), lectureTime.getEndTime(), userTeam))
                .collect(Collectors.toList());

        teamTimeRepository.saveAll(teamTimes);
    }

    private List<LectureTime> getPersonalLectureTime(User user) {
        return lectureTimeRepository.findUserLectureTime(user.getId());
    }

}
