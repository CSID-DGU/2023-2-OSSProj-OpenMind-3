package com.ossprac.openmind.meetingNote.repository;

import com.ossprac.openmind.meetingNote.entity.MeetingNote;
import com.ossprac.openmind.team.entity.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MeetingNoteRepository extends JpaRepository<MeetingNote, Long> {
    @Query("SELECT m FROM MeetingNote m " +
            "INNER JOIN Team t ON m.team = t " +
            "WHERE t = :team")
    List<MeetingNote> findAllByTeam(@Param("team") Team team);
}
