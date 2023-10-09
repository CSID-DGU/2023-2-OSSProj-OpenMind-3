package com.ossprac.openmind.domain;

import lombok.Getter;

import javax.persistence.*;

@Getter
@Entity
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "event_id")
    private Long id;

//    @JoinColumn(name = "team_id")
    private Team team;

    private String name;
    private String title;
    private String description;


}
