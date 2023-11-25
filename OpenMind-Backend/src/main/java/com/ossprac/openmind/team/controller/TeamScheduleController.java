package com.ossprac.openmind.team.controller;

import com.ossprac.openmind.team.dto.res.PersonalScheduleResponse;
import com.ossprac.openmind.team.service.TeamScheduleService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/team")
public class TeamScheduleController {
    private final TeamScheduleService teamScheduleService;
    @ApiOperation("개인 시간표 가져오는 API")
    @GetMapping("/{teamId}/personal-schedule")
    public ResponseEntity<PersonalScheduleResponse> getMembers(@PathVariable Long teamId) {
        return ResponseEntity.ok(teamScheduleService.getPersonalSchedule(teamId));
    }
}
