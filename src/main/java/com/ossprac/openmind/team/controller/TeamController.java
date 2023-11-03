package com.ossprac.openmind.team.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ossprac.openmind.team.dto.req.TeamCreateRequest;
import com.ossprac.openmind.team.dto.req.TeamInvitationRequest;
import com.ossprac.openmind.team.dto.res.NotificationResponse;
import com.ossprac.openmind.team.dto.res.TeamCreateResponse;
import com.ossprac.openmind.team.dto.res.TeamInvitationNotificationResponse;
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

	@PostMapping("/invitation")
	public ResponseEntity<String> inviteMember(@RequestBody TeamInvitationRequest request) {
		teamService.inviteMember(request);
		return ResponseEntity.ok("success");
	}

	@GetMapping("/invitation/notification")
	public ResponseEntity<TeamInvitationNotificationResponse> getInvitationNotification() {
		return ResponseEntity.ok(teamService.getInvitationNotification());
	}

	@PostMapping("/invitation/notification/{notificationId}/{accepted}")
	public ResponseEntity<NotificationResponse> respondToInvitation(
		@PathVariable Long notificationId,
		@PathVariable boolean accepted) {
		return ResponseEntity.ok(teamService.respondToInvitation(notificationId, accepted));
	}
}
