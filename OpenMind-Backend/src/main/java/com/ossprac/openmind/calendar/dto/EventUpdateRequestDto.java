package com.ossprac.openmind.calendar.dto;

import com.ossprac.openmind.calendar.entity.Event;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class EventUpdateRequestDto {
    private String title;
    private String description;
    private String start;
    private String end;

    public Event toEntity() {
        return Event.builder()
                .title(title)
                .description(description)
                .start(LocalDate.parse(start))
                .end(LocalDate.parse(end))
                .build();
    }
}
