package com.ossprac.openmind.team.dto.res;

import lombok.Getter;

import java.util.List;

@Getter
public class PersonalLectureTimeResponse {

    private List<LectureTimesResponse> lectureTimesResponses;

    public PersonalLectureTimeResponse(List<LectureTimesResponse> lectureTimesResponses) {
        this.lectureTimesResponses = lectureTimesResponses;
    }
}
