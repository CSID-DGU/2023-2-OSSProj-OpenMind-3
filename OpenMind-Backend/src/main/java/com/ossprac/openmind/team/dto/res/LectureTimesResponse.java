package com.ossprac.openmind.team.dto.res;

import lombok.Getter;

import java.util.List;

@Getter
public class LectureTimesResponse {
    private Long lectureId;
    private String lectureName;
    private List<LectureTimeResponse> lectureTimes;

    public LectureTimesResponse(Long lectureId, String lectureName, List<LectureTimeResponse> lectureTimes) {
        this.lectureId = lectureId;
        this.lectureName = lectureName;
        this.lectureTimes = lectureTimes;
    }
}
