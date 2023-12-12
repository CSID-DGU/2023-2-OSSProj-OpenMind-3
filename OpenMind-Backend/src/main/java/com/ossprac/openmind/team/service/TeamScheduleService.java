package com.ossprac.openmind.team.service;

import com.ossprac.openmind.global.error.BaseException;
import com.ossprac.openmind.global.util.UserUtils;
import com.ossprac.openmind.lecture.entity.LectureTime;
import com.ossprac.openmind.lecture.repository.LectureTimeRepository;
import com.ossprac.openmind.team.dto.req.TeamScheduleAddRequest;
import com.ossprac.openmind.team.dto.req.TeamScheduleDeleteRequest;
import com.ossprac.openmind.team.dto.res.PersonalScheduleResponse;
import com.ossprac.openmind.team.dto.res.TeamScheduleResponse;
import com.ossprac.openmind.team.entity.Team;
import com.ossprac.openmind.team.entity.TeamSchedule;
import com.ossprac.openmind.team.entity.UserTeam;
import com.ossprac.openmind.team.mapper.TeamEntityMapper;
import com.ossprac.openmind.team.repository.TeamRepository;
import com.ossprac.openmind.team.repository.TeamScheduleRepository;
import com.ossprac.openmind.team.repository.UserTeamRepository;
import com.ossprac.openmind.user.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

import static com.ossprac.openmind.global.error.ErrorCode.DUPLICATED_SCHEDULE;

@Service
@RequiredArgsConstructor
public class TeamScheduleService {
    private final LectureTimeRepository lectureTimeRepository;
    private final TeamScheduleRepository teamScheduleRepository;
    private final UserTeamRepository userTeamRepository;
    private final TeamRepository teamRepository;
    private final TeamEntityMapper teamEntityMapper;
    private final UserUtils userUtils;

    public void setPersonalSchedule(List<UserTeam> userTeams) {
        userTeams.stream().forEach(this::setTeamSchedule);
    }

    public PersonalScheduleResponse getPersonalSchedule(Long teamId) {
        Team team = teamRepository.findById(teamId).orElseThrow();
        UserTeam userTeam = userTeamRepository.findByTeamAndUser(team, userUtils.getUser());

        List<TeamScheduleResponse> teamScheduleResponses = userTeamRepository.findAllByUserTeam(userTeam);

        return new PersonalScheduleResponse(teamScheduleResponses);
    }

    public List<TeamScheduleResponse> getTeamSchedule(Long teamId) {
        Team team = teamRepository.findById(teamId).orElseThrow();
        List<UserTeam> userTeams = userTeamRepository.findByTeam(team);
        List<TeamScheduleResponse> teamSchedules = teamScheduleRepository.findAllByUserTeamIn(userTeams);
        return teamSchedules;
    }

    public void addSchedule(TeamScheduleAddRequest teamScheduleAddRequest) {
        Team team = teamRepository.findById(teamScheduleAddRequest.getTeamId()).orElseThrow();
        UserTeam userTeam = userTeamRepository.findByTeamAndUser(team, userUtils.getUser());

        if (isDuplicated(teamScheduleAddRequest, userTeam)) {
            throw new BaseException(DUPLICATED_SCHEDULE);
        }

        TeamSchedule teamSchedule = teamEntityMapper.toTeamScheduleEntity(teamScheduleAddRequest, userTeam);
        teamScheduleRepository.save(teamSchedule);
    }

    public void deleteSchedule(TeamScheduleDeleteRequest teamScheduleDeleteRequest) {
        Team team = teamRepository.findById(teamScheduleDeleteRequest.getTeamId()).orElseThrow();
        UserTeam userTeam = userTeamRepository.findByTeamAndUser(team, userUtils.getUser());

        deleteBy(teamScheduleDeleteRequest, userTeam);
    }

    private void deleteBy(TeamScheduleDeleteRequest teamScheduleDeleteRequest, UserTeam userTeam) {
        teamScheduleRepository.deleteByDaysOfWeekAndAndStartTimeAndEndTimeAndUserTeam(teamScheduleDeleteRequest.getDaysOfWeek(),
                teamScheduleDeleteRequest.getStartTime(),
                teamScheduleDeleteRequest.getEndTime(),
                userTeam);
    }

    private void setTeamSchedule(UserTeam userTeam) {
        List<LectureTime> lectureTimes = getPersonalSchedule(userTeam.getUser());
        List<TeamSchedule> teamTimes = lectureTimes.stream()
                .map(lectureTime -> teamEntityMapper.toTeamScheduleEntity(lectureTime, userTeam))
                .collect(Collectors.toList());

        teamScheduleRepository.saveAll(teamTimes);
    }

    private List<LectureTime> getPersonalSchedule(User user) {
        return lectureTimeRepository.findUserLectureTime(user.getId());
    }

    private boolean isDuplicated(TeamScheduleAddRequest teamScheduleAddRequest, UserTeam userTeam) {
        return teamScheduleRepository.findByDaysOfWeekAndStartTimeAndEndTimeAndUserTeam(teamScheduleAddRequest.getDaysOfWeek(), teamScheduleAddRequest.getStartTime(), teamScheduleAddRequest.getEndTime(), userTeam)
                .isPresent();
    }

}
