package com.ossprac.openmind.meetingNote.dto;

import com.ossprac.openmind.meetingNote.entity.MeetingNote;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@NoArgsConstructor
public class MeetingNoteResponseDto {

    private Long id;
    private String title;
    private String content;

    public MeetingNoteResponseDto(MeetingNote meetingNote) {
        this.id = meetingNote.getId();
        this.title = meetingNote.getTitle();
        this.content = meetingNote.getContent();
    }

    public static List<MeetingNoteResponseDto> listOf(List<MeetingNote> meetingNotes) {
        return meetingNotes.stream()
                .map(MeetingNoteResponseDto::new)
                .collect(Collectors.toList());
    }
}
