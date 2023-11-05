package com.ossprac.openmind.user.dto.res;

import lombok.Builder;
import lombok.Getter;

@Getter
public class TokenResponse {

	private String atk;
	private String rtk;

	@Builder
	public TokenResponse(String atk, String rtk) {
		this.atk = atk;
		this.rtk = rtk;
	}

	public static TokenResponse from(String atk, String rtk) {
		return TokenResponse.builder()
			.atk(atk)
			.rtk(rtk)
			.build();
	}
}
