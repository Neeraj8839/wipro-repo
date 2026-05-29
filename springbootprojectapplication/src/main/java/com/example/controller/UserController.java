package com.example.controller;

import com.example.bean.User;
import com.example.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/userapi")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/add")
    public User addUser(@RequestBody User user) {

        return userService.addUser(user);
    }
}