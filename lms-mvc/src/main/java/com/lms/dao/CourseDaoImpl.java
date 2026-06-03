package com.lms.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;

import com.lms.config.HibernateUtil;
import com.lms.entity.Course;

public class CourseDaoImpl implements CourseDao {

    @Override
    public void saveCourse(Course course) {

        Session session =
                HibernateUtil
                        .getSessionFactory()
                        .openSession();

        Transaction tx = session.beginTransaction();

        session.persist(course);

        tx.commit();

        session.close();
    }

    @Override
    public List<Course> getAllCourses() {

        Session session =
                HibernateUtil
                        .getSessionFactory()
                        .openSession();

        List<Course> list =
                session.createQuery(
                        "from Course",
                        Course.class
                ).list();

        session.close();

        return list;
    }

    @Override
    public Course getCourseById(int id) {

        Session session =
                HibernateUtil
                        .getSessionFactory()
                        .openSession();

        Course course = session.get(Course.class, id);

        session.close();

        return course;
    }
}