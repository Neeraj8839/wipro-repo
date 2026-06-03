package com.lms.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;

import com.lms.config.HibernateUtil;
import com.lms.entity.Student;

public class StudentDaoImpl implements StudentDao {

    @Override
    public void saveStudent(Student student) {

        Session session =
                HibernateUtil
                        .getSessionFactory()
                        .openSession();

        Transaction tx = session.beginTransaction();

        session.persist(student);

        tx.commit();

        session.close();
    }

//    @Override
//    public List<Student> getAllStudents() {
//
//        Session session =
//                HibernateUtil
//                        .getSessionFactory()
//                        .openSession();
//
//        List<Student> list =
//                session.createQuery(
//                        "from Student",
//                        Student.class
//                ).list();
//
//        session.close();
//
//        return list;
//    }



    @Override
    public List<Student> getAllStudents() {

        Session session =
                HibernateUtil.getSessionFactory().openSession();

        List<Student> students =
                session.createQuery(
                        "select distinct s from Student s left join fetch s.courses",
                        Student.class
                ).list();

        session.close();

        return students;
    }




    @Override
    public Student getStudentById(int id) {

        Session session =
                HibernateUtil
                        .getSessionFactory()
                        .openSession();

        Student student =
                session.get(Student.class, id);

        session.close();

        return student;
    }
}
