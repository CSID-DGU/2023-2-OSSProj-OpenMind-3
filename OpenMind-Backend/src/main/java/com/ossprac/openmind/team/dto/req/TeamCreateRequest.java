package com.ossprac.openmind.team.dto.req;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class TeamCreateRequest {
	private Long lectureId;
	private String teamName;
}
