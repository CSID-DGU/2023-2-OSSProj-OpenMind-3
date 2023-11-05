package com.ossprac.openmind.lecture.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ossprac.openmind.lecture.entity.Lecture;

public interface LectureRepository extends JpaRepository<Lecture, Long> {
}
