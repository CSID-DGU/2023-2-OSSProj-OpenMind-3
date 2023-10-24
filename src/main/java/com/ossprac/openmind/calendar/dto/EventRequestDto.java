package com.ossprac.openmind.calendar.dto;

import com.ossprac.openmind.calendar.entity.Event;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class EventRequestDto {

    private String title;
    private String description;
    private String startDate;
    private String endDate;

    public Event toEntity() {
        return Event.builder()
                .title(title)
                .description(description)
                .startDate(LocalDateTime.parse(startDate))
                .endDate(LocalDateTime.parse(endDate))
                .build();
    }
}
