package com.ossprac.openmind.calendar.entity;

import com.ossprac.openmind.calendar.dto.EventUpdateRequestDto;
import com.ossprac.openmind.team.entity.Team;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Getter
@Entity
@Table(name = "events")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "team_id")
    private Team team;

    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "start_date")
    private LocalDate start;

    @Column(name = "end_date")
    private LocalDate end;

    @Builder
    public Event(String title, String description, LocalDate start, LocalDate end) {
        this.title = title;
        this.description = description;
        this.start = start;
        this.end = end;
    }

    //==연관 관계 편의 메서드 ==//
    public void setTeam(Team team) {
        this.team = team;
    }

    public void update(Event event) {
        if (event.getTitle() != null) {
            this.title = event.getTitle();
        }
        if (event.getDescription() != null) {
            this.description = event.getDescription();
        }
        if (event.getStart() != null) {
            this.start = event.getStart();
        }
        if (event.getEnd() != null) {
            this.end = event.getEnd();
        }
    }

    public void setEnd(LocalDate end) {
        this.end = end;
    }
}
