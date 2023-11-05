package com.ossprac.openmind.calendar.entity;

import com.ossprac.openmind.team.entity.Team;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

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
    private LocalDateTime startDate;

    @Column(name = "end_date")
    private LocalDateTime endDate;

    @Builder
    public Event(String title, String description, LocalDateTime startDate, LocalDateTime endDate) {
        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    //==연관 관계 편의 메서드 ==//
    public void setTeam(Team team) {
        this.team = team;
    }

    public void updateEventTitle(String title) {
        this.title = title;
    }

    public void updateEventDescription(String description) {
        this.description = description;
    }

    public void updateEventStartDate(LocalDateTime startDate) {
        this.startDate = startDate;
    }

    public void updateEventEndDate(LocalDateTime endDate) {
        this.endDate = endDate;
    }
}
