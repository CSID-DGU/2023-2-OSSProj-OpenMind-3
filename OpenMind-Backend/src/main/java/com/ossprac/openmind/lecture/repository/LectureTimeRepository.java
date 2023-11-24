package com.ossprac.openmind.lecture.repository;

import com.ossprac.openmind.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import com.ossprac.openmind.lecture.entity.LectureTime;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface LectureTimeRepository extends JpaRepository<LectureTime, Long> {
    @Query(value = "SELECT lt.* FROM lecture_time lt " +
            "JOIN lecture l ON lt.lecture_id = l.lecture_id " +
            "JOIN user_lecture ul ON l.lecture_id = ul.lecture_id " +
            "WHERE ul.user_id = :userId ", nativeQuery = true)
    List<LectureTime> findUserLectureTime(@Param("userId") Long userId);
}
