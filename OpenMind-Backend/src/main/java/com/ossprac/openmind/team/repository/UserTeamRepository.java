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
	@Query("select u from User u "
		+ "inner join UserTeam uT on uT.user = u "
		+ "where uT.team = :team")
	List<User> findAllByTeam(@Param("team") Team team);

	UserTeam findByTeamAndUser(Team team, User user);

	@Query("select new com.ossprac.openmind.team.dto.res.TeamScheduleResponse(tt.daysOfWeek, tt.startTime, tt.endTime) " +
			"from TeamSchedule tt " +
			"where tt.userTeam = :userTeam ")
	List<TeamScheduleResponse> findAllByUserTeam(UserTeam userTeam);

    List<UserTeam> findByTeam(Team team);
}
