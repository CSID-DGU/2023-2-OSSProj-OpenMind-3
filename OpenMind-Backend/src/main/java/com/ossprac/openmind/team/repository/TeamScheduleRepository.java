package com.ossprac.openmind.team.repository;

import com.ossprac.openmind.lecture.entity.DaysOfWeek;
import com.ossprac.openmind.team.dto.res.TeamScheduleResponse;
import com.ossprac.openmind.team.entity.TeamSchedule;
import com.ossprac.openmind.team.entity.UserTeam;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface TeamScheduleRepository extends JpaRepository<TeamSchedule, Long> {
    @Query("select new com.ossprac.openmind.team.dto.res.TeamScheduleResponse(tt.daysOfWeek, tt.startTime, tt.endTime) " +
            "from TeamSchedule tt " +
            "where tt.userTeam in :userTeams ")
    List<TeamScheduleResponse> findAllByUserTeamIn(@Param("userTeams") List<UserTeam> userTeams);

    Optional<TeamSchedule> findByDaysOfWeekAndStartTimeAndEndTimeAndUserTeam(DaysOfWeek daysOfWeek, LocalTime startTime, LocalTime endTime, UserTeam userTeam);
}
