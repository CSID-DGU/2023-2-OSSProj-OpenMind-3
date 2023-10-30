package com.ossprac.openmind.lecture.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ossprac.openmind.lecture.dto.req.LectureCreateRequest;
import com.ossprac.openmind.lecture.service.LectureService;

import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("lecture")
public class LectureController {

	private final LectureService lectureService;

	@ApiOperation("강의생성 API")
	@PostMapping
	public ResponseEntity<String> createLecture(@RequestBody LectureCreateRequest request) {
		lectureService.createLecture(request);
		return ResponseEntity.ok("success");
	}
}
