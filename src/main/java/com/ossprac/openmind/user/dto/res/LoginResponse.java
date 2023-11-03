package com.ossprac.openmind.user.dto.res;

import lombok.Builder;
import lombok.Getter;

@Getter
public class LoginResponse {

	private  Long id;

	private String name;
	private  String atk;
	private  String rtk;

	@Builder
	public LoginResponse(Long id, String name, String atk, String rtk) {
		this.id = id;
		this.name = name;
		this.atk = atk;
		this.rtk = rtk;
	}

	public static LoginResponse from(Long id, String name, String atk, String rtk) {
		return LoginResponse.builder()
			.id(id)
			.name(name)
			.atk(atk)
			.rtk(rtk)
			.build();
	}
}
