package com.ossprac.openmind.calendar.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class EventResponseDto {

    private Long id;
    private String title;
    private String description;
    private LocalDate startDate;
    private LocalDate endDate;
}
