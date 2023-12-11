package com.ossprac.openmind.meetingNote.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.ossprac.openmind.meetingNote.entity.MeetingNote;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@NoArgsConstructor
public class MeetingNoteResponseDto {

    private Long id;
    private String title;
    private String content;
    private String writer;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDate createDate;

    public MeetingNoteResponseDto(MeetingNote meetingNote) {
        this.id = meetingNote.getId();
        this.title = meetingNote.getTitle();
        this.content = meetingNote.getContent();
        this.writer = meetingNote.getWriter();
        this.createDate = meetingNote.getCreateDate();
    }

    public static List<MeetingNoteResponseDto> listOf(List<MeetingNote> meetingNotes) {
        return meetingNotes.stream()
                .map(MeetingNoteResponseDto::new)
                .collect(Collectors.toList());
    }
}
