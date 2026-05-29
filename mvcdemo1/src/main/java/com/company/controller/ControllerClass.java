package com.company.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class ControllerClass {
	
	@GetMapping("/message")
	public String home() {
		System.out.println("This is home URL");
		return "form";
	}
	
	@GetMapping("/data")
	public String home(Model model) {
		System.out.println("This is data URL");
		model.addAttribute("name", "Niti Dwivedi");
		model.addAttribute("Designation", "Trainer");
		return "data";
	}
	
	@RequestMapping(path="/display", method=RequestMethod.POST)
	public String display(@ModelAttribute User user, Model model) {
		// Form data is bound to the User object attributes
		System.out.println(user);
		model.addAttribute("namevalue", user);
		return "display"; 
	}
}