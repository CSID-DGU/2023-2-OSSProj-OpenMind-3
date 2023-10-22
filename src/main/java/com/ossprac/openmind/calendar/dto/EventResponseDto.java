package com.ossprac.openmind.calendar.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
@AllArgsConstructor
public class EventResponseDto {

    private final Long eventId;
    private final String title;
    private final String description;
    private final LocalDateTime startDate;
    private final LocalDateTime endDate;
}
