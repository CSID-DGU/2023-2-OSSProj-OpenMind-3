package com.ossprac.openmind.team.entity;

import com.ossprac.openmind.lecture.entity.DaysOfWeek;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalTime;

@Entity
@Getter
@NoArgsConstructor
@Table(name = "team_schedule")
public class TeamSchedule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "team_schedule_id")
    private Long id;

    @Enumerated(EnumType.STRING)
    private DaysOfWeek daysOfWeek;

    private LocalTime startTime;

    private LocalTime endTime;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_team_id")
    private UserTeam userTeam;

    @Builder
    private TeamSchedule(DaysOfWeek daysOfWeek, LocalTime startTime, LocalTime endTime, UserTeam userTeam) {
        this.daysOfWeek = daysOfWeek;
        this.startTime = startTime;
        this.endTime = endTime;
        this.userTeam = userTeam;
    }

    public static TeamSchedule of(DaysOfWeek daysOfWeek, LocalTime startTime, LocalTime endTime, UserTeam userTeam){
        return TeamSchedule.builder()
                .daysOfWeek(daysOfWeek)
                .startTime(startTime)
                .endTime(endTime)
                .userTeam(userTeam).build();
    }
}
