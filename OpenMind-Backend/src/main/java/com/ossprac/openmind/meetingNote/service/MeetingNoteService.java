package com.ossprac.openmind.meetingNote.service;

import com.ossprac.openmind.meetingNote.dto.MeetingNoteRequestDto;
import com.ossprac.openmind.meetingNote.dto.MeetingNoteResponseDto;
import com.ossprac.openmind.meetingNote.dto.MeetingNoteUpdateRequestDto;
import com.ossprac.openmind.meetingNote.entity.MeetingNote;
import com.ossprac.openmind.meetingNote.repository.MeetingNoteRepository;
import com.ossprac.openmind.team.entity.Team;
import com.ossprac.openmind.team.repository.TeamRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.EntityNotFoundException;
import java.io.IOException;
import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MeetingNoteService {

    private final TeamRepository teamRepository;
    private final MeetingNoteRepository meetingNoteRepository;

    @Autowired
    private final S3Uploader s3Uploader;

    public MeetingNoteResponseDto createMeetingNote(MeetingNoteRequestDto requestDto) {
        Team team = teamRepository.findById(requestDto.getTeamId()).orElseThrow(() -> new EntityNotFoundException("존재하지 않는 팀입니다."));
        MeetingNote meetingNote = requestDto.toEntity();
        meetingNote.setTeam(team);
        meetingNoteRepository.save(meetingNote);
        return new MeetingNoteResponseDto(meetingNote);
    }

    public List<String> uploadFile(List<MultipartFile> files) throws IOException {
        return s3Uploader.upload(files);
    }

    public List<MeetingNoteResponseDto> getMeetingNotes(Long teamId) {
        Team team = teamRepository.findById(teamId).orElseThrow(() -> new EntityNotFoundException("존재하지 않는 팀입니다."));
        List<MeetingNote> meetingNotes = meetingNoteRepository.findAllByTeam(team);
        return MeetingNoteResponseDto.listOf(meetingNotes);
    }

    public MeetingNoteResponseDto getMeetingNoteById(Long meetingNoteId) {
        MeetingNote meetingNote = meetingNoteRepository.findById(meetingNoteId)
                .orElseThrow(() -> new EntityNotFoundException("존재하지 않는 회의록입니다."));
        return new MeetingNoteResponseDto(meetingNote);
    }

    public MeetingNoteResponseDto updateMeetingNote(MeetingNoteUpdateRequestDto requestDto) {
        MeetingNote meetingNote = meetingNoteRepository.findById(requestDto.getMeetingNoteId())
                .orElseThrow(() -> new EntityNotFoundException("존재하지 않는 회의록입니다."));
        meetingNote.update(requestDto);
        meetingNoteRepository.save(meetingNote);
        return new MeetingNoteResponseDto(meetingNote);
    }

    public String deleteMeetingNoteById(Long meetingNoteId) {
        MeetingNote meetingNote = meetingNoteRepository.findById(meetingNoteId)
                .orElseThrow(() -> new EntityNotFoundException("존재하지 않는 회의록입니다."));
        meetingNoteRepository.delete(meetingNote);
        return "success";
    }
}
