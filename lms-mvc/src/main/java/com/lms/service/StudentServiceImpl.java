package com.lms.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.lms.dao.StudentDao;
import com.lms.dao.StudentDaoImpl;
import com.lms.entity.Student;

@Service
public class StudentServiceImpl implements StudentService {

    StudentDao dao = new StudentDaoImpl();

    @Override
    public void saveStudent(Student student) {

        dao.saveStudent(student);
    }

    @Override
    public List<Student> getAllStudents() {

        return dao.getAllStudents();
    }

    @Override
    public Student getStudentById(int id) {

        return dao.getStudentById(id);
    }
}