package com.ossprac.openmind.team.repository;

import com.ossprac.openmind.team.entity.TeamTime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeamTimeRepository extends JpaRepository<TeamTime, Long> {
}
