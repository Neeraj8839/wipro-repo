package com.lms.dao;

import java.util.List;

import com.lms.entity.Student;

public interface StudentDao {

    void saveStudent(Student student);

    List<Student> getAllStudents();

    Student getStudentById(int id);
}