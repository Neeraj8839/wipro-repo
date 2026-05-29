package com.example.securitydemo.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "Welcome to Home Page";
    }

    @GetMapping("/dashboard")
    public String dashboard() {
        return "Welcome to Secure Dashboard";


    }
    // POST API
    @PostMapping("/login")
    public String login(@RequestBody String username) {

        return "Welcome " + username;
    }
}