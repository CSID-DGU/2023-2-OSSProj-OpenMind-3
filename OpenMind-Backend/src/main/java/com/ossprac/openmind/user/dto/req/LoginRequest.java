package com.ossprac.openmind.user.dto.req;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class LoginRequest {

	private String id;
	private String password;

	public LoginRequest(String id, String password) {
		this.id = id;
		this.password = password;
	}
}
