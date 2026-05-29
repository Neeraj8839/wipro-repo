package com.lms.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import com.lms.entity.Course;
import com.lms.service.CourseService;
import com.lms.service.CourseServiceImpl;

@Controller
public class CourseController {

    CourseService service =
            new CourseServiceImpl();

    @GetMapping("/courseForm")

    public String showForm(Model model) {

        model.addAttribute(
                "course",
                new Course()
        );

        return "course-form";
    }

    @PostMapping("/saveCourse")

    public String saveCourse(
            @ModelAttribute Course course
    ) {

        service.saveCourse(course);

        return "redirect:/viewCourses";
    }

    @GetMapping("/viewCourses")

    public String viewCourses(Model model) {

        model.addAttribute(
                "courses",
                service.getAllCourses()
        );

        return "view";
    }
}