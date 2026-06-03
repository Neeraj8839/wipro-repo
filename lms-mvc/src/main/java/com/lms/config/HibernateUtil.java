package com.lms.config;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.lms.entity.Course;
import com.lms.entity.Student;

public class HibernateUtil {

    private static final SessionFactory factory;

    static {

        factory = new Configuration()
                .configure("hibernate.cfg.xml")
                .addAnnotatedClass(Student.class)
                .addAnnotatedClass(Course.class)
                .buildSessionFactory();
    }

    public static SessionFactory getSessionFactory() {
        return factory;
    }
}