package com.ossprac.openmind.meetingNote.dto;

import lombok.Getter;

@Getter
public class MeetingNoteUpdateRequestDto {

    private Long meetingNoteId;
    private String title;
    private String content;
}
