package com.wipro;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class UserController {

    @Autowired
    private userDAO userDAO;

    // Open Register Form
    @GetMapping("/register")
    public String showForm(Model model) {

        model.addAttribute("user", new UserModel());

        return "register";
    }

    // Save User Data
    @RequestMapping(
            path="/register",
            method=RequestMethod.POST)

    public String saveUser(
            @ModelAttribute UserModel user,
            Model model) {

        userDAO.saveUser(user);

        model.addAttribute("data", user);

        model.addAttribute(
                "message",
                "User added successfully!");

        return "success";
    }
}