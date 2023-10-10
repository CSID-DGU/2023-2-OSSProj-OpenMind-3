package com.ossprac.openmind.global.error;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler(BindException.class)
	protected ResponseEntity<ErrorResponse> handleBindException(BindException e) {
		ErrorResponse errorResponse = ErrorResponse.of(HttpStatus.BAD_REQUEST.value(), e.getBindingResult());
		return ResponseEntity.status(HttpStatus.BAD_REQUEST)
			.body(errorResponse);
	}

	@ExceptionHandler(BaseException.class)
	protected ResponseEntity<ErrorResponse> handleBaseException(BaseException e) {
		ErrorResponse errorResponse = ErrorResponse.of(e.getStatus().getCode(), e.getMessage());
		return ResponseEntity.status(e.getStatus().getHttpStatus())
			.body(errorResponse);
	}

	@ExceptionHandler(Exception.class)
	protected ResponseEntity<ErrorResponse> handleException(Exception e) {
		ErrorResponse errorResponse = ErrorResponse.of(HttpStatus.INTERNAL_SERVER_ERROR.value(), e.getMessage());
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
			.body(errorResponse);
	}

}
