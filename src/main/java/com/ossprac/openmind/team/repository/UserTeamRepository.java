package com.ossprac.openmind.team.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ossprac.openmind.team.entity.Team;
import com.ossprac.openmind.team.entity.UserTeam;
import com.ossprac.openmind.user.entity.User;

@Repository
public interface UserTeamRepository extends JpaRepository<UserTeam, Long> {
	List<UserTeam> findAllByUser(User user);

	UserTeam findByUser(User user);

	List<UserTeam> findAllByTeamAndAcceptedIsTrue(Team team);
}
