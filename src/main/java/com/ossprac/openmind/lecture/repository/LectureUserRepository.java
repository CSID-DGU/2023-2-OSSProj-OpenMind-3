package com.ossprac.openmind.lecture.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ossprac.openmind.lecture.dto.res.UserResponse;
import com.ossprac.openmind.lecture.entity.Lecture;
import com.ossprac.openmind.lecture.entity.UserLecture;

public interface LectureUserRepository extends JpaRepository<UserLecture, Long> {
	@Query("select new com.ossprac.openmind.lecture.dto.res.UserResponse(u.name, u.major, u.studentId) "
		+ "from UserLecture uL "
		+ "inner join uL.user u "
		+ "where uL.lecture = :lecture ")
	List<UserResponse> findUserListInLecture(@Param("lecture")Lecture lecture);
}
