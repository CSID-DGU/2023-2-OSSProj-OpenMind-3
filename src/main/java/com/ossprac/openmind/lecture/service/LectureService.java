package com.ossprac.openmind.lecture.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.ossprac.openmind.global.util.UserUtils;
import com.ossprac.openmind.lecture.dto.req.LectureCreateRequest;
import com.ossprac.openmind.lecture.dto.res.LectureResponse;
import com.ossprac.openmind.lecture.dto.res.LectureUserResponse;
import com.ossprac.openmind.lecture.dto.res.UserLectureResponse;
import com.ossprac.openmind.lecture.dto.res.UserResponse;
import com.ossprac.openmind.lecture.entity.Lecture;
import com.ossprac.openmind.lecture.entity.LectureTime;
import com.ossprac.openmind.lecture.repository.LectureRepository;
import com.ossprac.openmind.lecture.repository.LectureTimeRepository;
import com.ossprac.openmind.lecture.repository.UserLectureRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class LectureService {

	private final LectureRepository lectureRepository;
	private final LectureTimeRepository lectureTimeRepository;
	private final UserLectureRepository userLectureRepository;
	private final UserUtils userUtils;

	public void createLecture(LectureCreateRequest request) {
		Lecture lecture = new Lecture(request.getName());
		Lecture savedLecture = lectureRepository.save(lecture);

		List<LectureTime> lectureTimeList = request.getLectureTimeList().stream()
			.map(time -> new LectureTime(
				savedLecture,
				time.getDaysOfWeek(),
				time.getStartTime(),
				time.getEndTime()))
			.collect(Collectors.toList());

		lectureTimeRepository.saveAll(lectureTimeList);
	}

	public LectureUserResponse getStudentList(Long lectureId) {
		Lecture lecture = lectureRepository.findById(lectureId).orElseThrow();
		List<UserResponse> userList = userLectureRepository.findUserListInLecture(lecture);
		return new LectureUserResponse(userList);
	}

	public UserLectureResponse getUserLecture() {
		List<LectureResponse> lectureList = userLectureRepository.findUserLecture(userUtils.getUser());
		return new UserLectureResponse(lectureList);
	}

}
