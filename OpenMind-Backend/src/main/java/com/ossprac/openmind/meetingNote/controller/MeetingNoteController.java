package com.ossprac.openmind.meetingNote.controller;

import com.ossprac.openmind.meetingNote.dto.MeetingNoteRequestDto;
import com.ossprac.openmind.meetingNote.dto.MeetingNoteUpdateRequestDto;
import com.ossprac.openmind.meetingNote.service.MeetingNoteService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/meetingNotes")
@RequiredArgsConstructor
public class MeetingNoteController {

    private final MeetingNoteService meetingNoteService;

    @ApiOperation("회의록 생성")
    @PostMapping(value = "/create", produces = "application/json; charset=utf8")
    public ResponseEntity<?> createMeetingNote(@RequestBody MeetingNoteRequestDto requestDto) {
        return ResponseEntity.ok(meetingNoteService.createMeetingNote(requestDto));
    }

    @ApiOperation("파일 업로드")
    @ResponseBody
    @PostMapping(value = "/uploadFile", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> uploadFile(@RequestPart List<MultipartFile> files) {
        try {
            return ResponseEntity.ok(meetingNoteService.uploadFile(files));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @ApiOperation("회의록 리스트 조회")
    @GetMapping
    public ResponseEntity<?> getMeetingNotes(@RequestParam Long teamId) {
        return ResponseEntity.ok(meetingNoteService.getMeetingNotes(teamId));
    }

    @ApiOperation("회의록 상세 조회")
    @GetMapping("/get")
    public ResponseEntity<?> getMeetingNoteById(@RequestParam Long meetingNoteId) {
        return ResponseEntity.ok(meetingNoteService.getMeetingNoteById(meetingNoteId));
    }

    @ApiOperation("회의록 수정")
    @PutMapping("/update")
    public ResponseEntity<?> updateMeetingNote(@RequestBody MeetingNoteUpdateRequestDto requestDto) {

        return ResponseEntity.ok(meetingNoteService.updateMeetingNote(requestDto));
    }

    @ApiOperation("회의록 삭제")
    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteMeetingNote(@RequestParam Long meetingNoteId) {
        try {
            return ResponseEntity.ok(meetingNoteService.deleteMeetingNoteById(meetingNoteId));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
