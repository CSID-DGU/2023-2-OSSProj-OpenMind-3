package com.ossprac.openmind.meetingNote.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class MeetingNoteRequestDto {

    private String title;
    private String content;
    private Long teamId;
}
