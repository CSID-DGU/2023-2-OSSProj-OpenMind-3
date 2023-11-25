package com.ossprac.openmind.team.repository;

import com.ossprac.openmind.team.entity.TeamSchedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeamScheduleRepository extends JpaRepository<TeamSchedule, Long> {

}
