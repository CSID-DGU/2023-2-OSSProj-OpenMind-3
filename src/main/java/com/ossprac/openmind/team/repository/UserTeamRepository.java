package com.ossprac.openmind.team.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ossprac.openmind.team.entity.UserTeam;

@Repository
public interface UserTeamRepository extends JpaRepository<UserTeam, Long> {
}
