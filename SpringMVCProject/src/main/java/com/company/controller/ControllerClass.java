package com.company.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/role")
public class ControllerClass {

    // URL:
    // http://localhost:8080/projectname/role/message

    @GetMapping("/message")
    public String home() {

        System.out.println("This is home URL");

        return "form";
    }

    
    // URL:
    // http://localhost:8080/projectname/role/data

    @GetMapping("/data")
    public String data(Model model) {

        System.out.println("This is data URL");

        model.addAttribute("name", "Niti Dwivedi");
        model.addAttribute("designation", "Trainer");

        return "data";
    }
}