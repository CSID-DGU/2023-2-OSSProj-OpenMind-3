package com.ossprac.openmind.team.repository;

import java.util.List;

import com.ossprac.openmind.team.dto.res.TeamScheduleResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ossprac.openmind.team.entity.Team;
import com.ossprac.openmind.team.entity.UserTeam;
import com.ossprac.openmind.user.entity.User;

@Repository
public interface UserTeamRepository extends JpaRepository<UserTeam, Long> {
	@Query("SELECT u FROM User u "
		+ "INNER JOIN UserTeam uT ON uT.user = u "
		+ "WHERE uT.team = :team")
	List<User> findAllByTeam(@Param("team") Team team);

	UserTeam findByTeamAndUser(Team team, User user);

	@Query("SELECT new com.ossprac.openmind.team.dto.res.TeamScheduleResponse(tt.daysOfWeek, tt.startTime, tt.endTime) " +
			"FROM TeamSchedule tt " +
			"WHERE tt.userTeam = :userTeam ")
	List<TeamScheduleResponse> findAllByUserTeam(UserTeam userTeam);
}
