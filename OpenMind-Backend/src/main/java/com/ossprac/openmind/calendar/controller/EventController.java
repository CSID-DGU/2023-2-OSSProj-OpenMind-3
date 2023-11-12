package com.ossprac.openmind.calendar.controller;

import com.ossprac.openmind.calendar.dto.EventRequestDto;
import com.ossprac.openmind.calendar.dto.EventResponseDto;
import com.ossprac.openmind.calendar.service.EventService;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@AllArgsConstructor
@RequestMapping("/api/events")
public class EventController {

    private final EventService eventService;

    @ApiOperation("일정 등록")
    @PostMapping(value = "/add")
    public ResponseEntity<EventResponseDto> addEvent(@RequestBody EventRequestDto requestDto) {
        return ResponseEntity.ok(eventService.addEvent(requestDto));
    }

    @ApiOperation("특정 일정 조회")
    @GetMapping(value = "/{eventId}")
    public ResponseEntity<EventResponseDto> getEvent(@PathVariable Long eventId) {
        return ResponseEntity.ok(eventService.getEvent(eventId));
    }
}
