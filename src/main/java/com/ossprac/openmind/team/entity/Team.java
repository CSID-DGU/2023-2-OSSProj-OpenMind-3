package com.ossprac.openmind.team.entity;

import javax.persistence.*;

import com.ossprac.openmind.lecture.entity.Lecture;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = lombok.AccessLevel.PROTECTED)
@Table(name = "teams")
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "team_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "lecture_id")
    private Lecture lecture;

    @Column(name = "name", nullable = false)
    private String name;

    public Team(Lecture lecture, String name) {
        this.lecture = lecture;
        this.name = name;
    }
}
