package com.ossprac.openmind.lecture.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ossprac.openmind.lecture.entity.LectureTime;

public interface LectureTimeRepository extends JpaRepository<LectureTime, Long> {
}
