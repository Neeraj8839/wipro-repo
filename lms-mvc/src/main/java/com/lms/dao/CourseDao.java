package com.lms.dao;

import java.util.List;

import com.lms.entity.Course;

public interface CourseDao {

    void saveCourse(Course course);

    List<Course> getAllCourses();

    Course getCourseById(int id);
}