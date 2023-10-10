package com.ossprac.openmind.global.error;

import org.springframework.http.HttpStatus;

import lombok.Getter;


@Getter
public enum ErrorCode {
    USER_NOT_FOUND(HttpStatus.INTERNAL_SERVER_ERROR,500, "유저를 찾을 수 없습니다.");

    private final HttpStatus httpStatus;
    private final int code;
    private final String message;

    ErrorCode(HttpStatus httpStatus, int code, String message) {
        this.httpStatus = httpStatus;
        this.code = code;
        this.message = message;
    }

}
