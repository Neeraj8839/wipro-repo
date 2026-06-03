package com.example.securitydemo.dto;

import lombok.Data;

@Data
public class UserRequestDTO {

    private String username;
    private String password;
    private String role;
}