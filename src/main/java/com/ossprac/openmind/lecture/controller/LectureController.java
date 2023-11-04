package com.ossprac.openmind.lecture.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ossprac.openmind.global.util.UserUtils;
import com.ossprac.openmind.lecture.dto.req.LectureCreateRequest;
import com.ossprac.openmind.lecture.dto.res.LectureUserResponse;
import com.ossprac.openmind.lecture.dto.res.UserLectureResponse;
import com.ossprac.openmind.lecture.service.LectureService;
import com.ossprac.openmind.team.dto.res.TeamResponses;

import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/lecture")
public class LectureController {

	private final LectureService lectureService;

	@ApiOperation("강의생성 API")
	@PostMapping
	public ResponseEntity<String> createLecture(@RequestBody LectureCreateRequest request) {
		lectureService.createLecture(request);
		return ResponseEntity.ok("success");
	}

	@ApiOperation("강의수강생 조회 API")
	@GetMapping("/{lectureId}/student-list")
	public ResponseEntity<LectureUserResponse> getStudentList(@PathVariable Long lectureId) {
		return ResponseEntity.ok(lectureService.getStudentList(lectureId));
	}

	@ApiOperation("강의별 팀조회 API")
	@GetMapping("/{lectureId}/teams")
	public ResponseEntity<TeamResponses> getTeams(@PathVariable Long lectureId) {
		return ResponseEntity.ok(lectureService.getTeams(lectureId));
	}

	@ApiOperation("내 강의 조회 API")
	@GetMapping
	public ResponseEntity<UserLectureResponse> getUserLecture() {
		return ResponseEntity.ok(lectureService.getUserLecture());
	}
}
