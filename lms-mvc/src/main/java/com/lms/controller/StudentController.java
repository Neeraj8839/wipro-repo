package com.lms.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import com.lms.entity.Course;
import com.lms.entity.Student;
import com.lms.service.CourseService;
import com.lms.service.StudentService;

@Controller
public class StudentController {

    @Autowired
    private StudentService studentService;

    @Autowired
    private CourseService courseService;

    // Open Student Form
    @GetMapping("/studentForm")
    public String showForm(Model model) {

        Student student = new Student();

        model.addAttribute("student", student);

        // Fetch all courses
        List<Course> courses = courseService.getAllCourses();

        model.addAttribute("courseList", courses);

        return "student-form";
    }

    // Save Student
    @PostMapping("/saveStudent")
    public String saveStudent(

            @ModelAttribute Student student,

            @RequestParam("courseIds") List<Integer> courseIds
    ) {

        List<Course> selectedCourses = new ArrayList<>();

        for (Integer id : courseIds) {

            Course c = courseService.getCourseById(id);

            selectedCourses.add(c);
        }

        student.setCourses(selectedCourses);

        studentService.saveStudent(student);

        return "redirect:/viewStudents";
    }

    // View Students
    @GetMapping("/viewStudents")
    public String viewStudents(Model model) {

        List<Student> students = studentService.getAllStudents();

        model.addAttribute("students", students);

        return "view";
    }
}