package com.ossprac.openmind.team.repository;

import java.util.List;

import com.ossprac.openmind.lecture.entity.Lecture;
import com.ossprac.openmind.team.entity.Team;
import com.ossprac.openmind.user.entity.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface TeamRepository extends JpaRepository<Team, Long> {

	@Query("select t from Team t "
		+ "inner join UserTeam ut on t.id = ut.team.id "
		+ "where t.lecture = :lecture "
		+ "and ut.user = :user "
		+ "and ut.accepted = true ")
	List<Team> findTeamsByUser(@Param("lecture") Lecture lecture, @Param("user") User user);
}

