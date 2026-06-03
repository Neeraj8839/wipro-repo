package com.example.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(AgeNotFoundException.class)
    public ResponseEntity<String> handleAgeException(AgeNotFoundException ex) {

        return new ResponseEntity<>(ex.getMessage(),
                HttpStatus.BAD_REQUEST);
    }
}