package com.ossprac.openmind;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

public class PasswordEncoderTest {

	PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
	@Test
	@DisplayName("패스워드 암호화 테스트")
	public void passwordEncode() {
		String rawPassword = "1234";

		String encodedPassword = passwordEncoder.encode(rawPassword);

		System.out.println(encodedPassword);
	}
}
