package com.ossprac.openmind.lecture.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ossprac.openmind.lecture.dto.res.LectureResponse;
import com.ossprac.openmind.lecture.dto.res.UserResponse;
import com.ossprac.openmind.lecture.entity.Lecture;
import com.ossprac.openmind.lecture.entity.UserLecture;
import com.ossprac.openmind.user.entity.User;

public interface UserLectureRepository extends JpaRepository<UserLecture, Long> {
	@Query("select new com.ossprac.openmind.lecture.dto.res.UserResponse(u.id, u.name, u.major, u.studentId) "
		+ "from UserLecture uL "
		+ "inner join uL.user u "
		+ "where uL.lecture = :lecture ")
	List<UserResponse> findUserListInLecture(@Param("lecture")Lecture lecture);

	@Query("select new com.ossprac.openmind.lecture.dto.res.LectureResponse(lec.id, lec.name) "
		+ "from UserLecture uL "
		+ "inner join uL.lecture lec "
		+ "where uL.user = :user ")
	List<LectureResponse> findUserLecture(@Param("user")User user);
}
