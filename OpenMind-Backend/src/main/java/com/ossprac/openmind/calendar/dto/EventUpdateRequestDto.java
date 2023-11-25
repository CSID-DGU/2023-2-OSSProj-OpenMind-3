package com.ossprac.openmind.calendar.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class EventUpdateRequestDto {
    private String title;
    private String description;
    private String startDate;
    private String endDate;
}
