package com.ossprac.openmind.team.repository;

import java.util.List;

import com.ossprac.openmind.team.entity.Team;
import com.ossprac.openmind.user.entity.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface TeamRepository extends JpaRepository<Team, Long> {

	@Query("SELECT t FROM Team t "
		+ "INNER JOIN UserTeam ut ON t.id = ut.team.id "
		+ "WHERE ut.user = :user AND ut.accepted = true ")
	List<Team> findTeamsByUser(@Param("user") User user);
}

