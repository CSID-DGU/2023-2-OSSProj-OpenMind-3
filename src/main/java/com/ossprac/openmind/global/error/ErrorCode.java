package com.ossprac.openmind.global.error;

import org.springframework.http.HttpStatus;

import lombok.Getter;


@Getter
public enum ErrorCode {
    USER_NOT_FOUND(HttpStatus.INTERNAL_SERVER_ERROR,500, "유저를 찾을 수 없습니다."),
    EMPTY_TOKEN(HttpStatus.BAD_REQUEST,400, "토큰 값을 보내주세요"),
    INVALID_TOKEN(HttpStatus.BAD_REQUEST,400,"잘못된 JWT 서명입니다."),
    EXPIRED_TOKEN(HttpStatus.BAD_REQUEST,400,"만료된 JWT 토큰입니다.");


    private final HttpStatus httpStatus;
    private final int code;
    private final String message;

    ErrorCode(HttpStatus httpStatus, int code, String message) {
        this.httpStatus = httpStatus;
        this.code = code;
        this.message = message;
    }

}
