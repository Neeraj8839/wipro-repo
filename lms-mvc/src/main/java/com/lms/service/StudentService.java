package com.lms.service;

import java.util.List;

import com.lms.entity.Student;

public interface StudentService {

    void saveStudent(Student student);

    List<Student> getAllStudents();

    Student getStudentById(int id);
}