package com.ossprac.openmind.meetingNote.dto;

import com.ossprac.openmind.meetingNote.entity.MeetingNote;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Getter
@NoArgsConstructor
public class MeetingNoteRequestDto {

    private String title;
    private String content;
    private String createDate;
    private String writer;
    private Long teamId;

    public MeetingNote toEntity() {
          return MeetingNote.builder()
                  .title(title)
                  .content(content)
                  .createDate(LocalDate.parse(createDate))
                  .writer(writer)
                  .build();
    }
}
