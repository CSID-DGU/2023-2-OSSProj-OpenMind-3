package com.ossprac.openmind.meetingNote.entity;

import com.ossprac.openmind.global.entity.BaseTimeEntity;
import com.ossprac.openmind.team.entity.Team;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@Entity
@Table(name = "meetingNotes")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class MeetingNote extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "meeting_note_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "team_id")
    private Team team;

    private String title;

    private String content;

    @Builder
    public MeetingNote(String title, String content) {
        this.title = title;
        this.content = content;
    }
}
