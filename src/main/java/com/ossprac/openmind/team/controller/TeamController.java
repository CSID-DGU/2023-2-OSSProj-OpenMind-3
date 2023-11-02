package com.ossprac.openmind.team.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ossprac.openmind.team.dto.req.TeamCreateRequest;
import com.ossprac.openmind.team.dto.res.TeamCreateResponse;
import com.ossprac.openmind.team.service.TeamService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/team")
public class TeamController {
	private final TeamService teamService;
	@PostMapping
	public ResponseEntity<TeamCreateResponse> createTeam(
		@RequestBody TeamCreateRequest request) {
		return ResponseEntity.ok(teamService.createTeam(request));
	}

}
