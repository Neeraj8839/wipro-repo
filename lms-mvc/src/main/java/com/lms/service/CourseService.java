package com.lms.service;

import java.util.List;

import com.lms.entity.Course;

public interface CourseService {

    void saveCourse(Course course);

    List<Course> getAllCourses();

    Course getCourseById(int id);
}