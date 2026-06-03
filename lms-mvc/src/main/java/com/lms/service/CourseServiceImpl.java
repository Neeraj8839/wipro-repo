package com.lms.service;

import java.util.List;
import org.springframework.stereotype.Service;

import com.lms.dao.CourseDao;
import com.lms.dao.CourseDaoImpl;
import com.lms.entity.Course;


@Service
public class CourseServiceImpl implements CourseService {

    CourseDao dao = new CourseDaoImpl();

    @Override
    public void saveCourse(Course course) {
        dao.saveCourse(course);
    }

    @Override
    public List<Course> getAllCourses() {
        return dao.getAllCourses();
    }

    @Override
    public Course getCourseById(int id) {
        return dao.getCourseById(id);
    }
}