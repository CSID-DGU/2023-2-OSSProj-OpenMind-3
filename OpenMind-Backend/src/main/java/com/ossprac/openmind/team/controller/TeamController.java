package com.ossprac.openmind.team.controller;

import com.ossprac.openmind.team.entity.UserTeam;
import com.ossprac.openmind.team.service.TeamScheduleService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ossprac.openmind.team.dto.req.TeamCreateRequest;
import com.ossprac.openmind.team.dto.req.TeamInvitationRequest;
import com.ossprac.openmind.team.dto.res.TeamCreateResponse;
import com.ossprac.openmind.team.dto.res.TeamMemberResponse;
import com.ossprac.openmind.team.service.TeamService;

import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/team")
public class TeamController {
	private final TeamService teamService;
	private final TeamScheduleService teamScheduleService;

	@ApiOperation("팀생성 API")
	@PostMapping
	public ResponseEntity<TeamCreateResponse> createTeam(
		@RequestBody TeamCreateRequest request) {
		return ResponseEntity.ok(teamService.createTeam(request));
	}

	@ApiOperation("팀원초대 API")
	@PostMapping("/invitation")
	public ResponseEntity<String> inviteMember(@RequestBody TeamInvitationRequest request) {
		List<UserTeam> userTeams = teamService.inviteMember(request);
		teamScheduleService.setPersonalLectureTime(userTeams);
		return ResponseEntity.ok("success");
	}

	@ApiOperation("팀원정보 가져오는 API")
	@GetMapping("/{teamId}/members")
	public ResponseEntity<TeamMemberResponse> getMembers(@PathVariable Long teamId) {
		return ResponseEntity.ok(teamService.getMembers(teamId));
	}
}
