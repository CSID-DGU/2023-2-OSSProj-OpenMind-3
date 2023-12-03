package com.ossprac.openmind.meetingNote.entity;

import com.ossprac.openmind.global.entity.BaseTimeEntity;
import com.ossprac.openmind.meetingNote.dto.MeetingNoteRequestDto;
import com.ossprac.openmind.meetingNote.dto.MeetingNoteUpdateRequestDto;
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
    public MeetingNote(MeetingNoteRequestDto requestDto, Team team) {
        this.title = requestDto.getTitle();
        this.content = requestDto.getContent();
        this.team = team;
    }

    public void update(MeetingNoteUpdateRequestDto requestDto) {
        this.title = requestDto.getTitle();
        this.content = requestDto.getContent();
    }
}
