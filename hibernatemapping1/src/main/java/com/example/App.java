package com.example;

import org.hibernate.Session;
import org.hibernate.Transaction;

import com.example.model.Course;
import com.example.model.ReportCard;
import com.example.model.Student;
import com.example.util.HibernateUtil;

public class App {

    public static void main(String[] args) {

        // Open Session
        Session session = HibernateUtil
                .getSessionFactory()
                .openSession();

        // Begin Transaction
        Transaction tx = session.beginTransaction();

        // ================= STUDENT 1 =================
        Student s1 = new Student("Niti");

        s1.addCourse(new Course("Java"));
        s1.addCourse(new Course("PD"));

        ReportCard rc1 = new ReportCard(450);

        s1.setReportcard(rc1);

        // ================= STUDENT 2 =================
        Student s2 = new Student("Rahul");

        s2.addCourse(new Course("Spring"));
        s2.addCourse(new Course("Hibernate"));

        ReportCard rc2 = new ReportCard(500);

        s2.setReportcard(rc2);

        // ================= STUDENT 3 =================
        Student s3 = new Student("Amit");

        s3.addCourse(new Course("React"));
        s3.addCourse(new Course("JS"));

        ReportCard rc3 = new ReportCard(420);

        s3.setReportcard(rc3);

        // Save All Students
        session.persist(s1);
        session.persist(s2);
        session.persist(s3);

        // Commit Transaction
        tx.commit();

        // Close Session
        session.close();

        // ================= FETCH DATA =================

        Session getSession = HibernateUtil
                .getSessionFactory()
                .openSession();

        // Fetch Student 1
        Student stud1 = getSession.get(Student.class, 1L);

        System.out.println("\n===== STUDENT 1 DETAILS =====");

        System.out.println("Student Name : " + stud1.getName());

        System.out.println("Marks : "
                + stud1.getReportcard().getMarks());

        stud1.getCourses().forEach(
                c -> System.out.println(
                        "Course : " + c.getTitle())
        );

        // Fetch Student 2
        Student stud2 = getSession.get(Student.class, 2L);

        System.out.println("\n===== STUDENT 2 DETAILS =====");

        System.out.println("Student Name : " + stud2.getName());

        System.out.println("Marks : "
                + stud2.getReportcard().getMarks());

        stud2.getCourses().forEach(
                c -> System.out.println(
                        "Course : " + c.getTitle())
        );

        // Fetch Student 3
        Student stud3 = getSession.get(Student.class, 3L);

        System.out.println("\n===== STUDENT 3 DETAILS =====");

        System.out.println("Student Name : " + stud3.getName());

        System.out.println("Marks : "
                + stud3.getReportcard().getMarks());

        stud3.getCourses().forEach(
                c -> System.out.println(
                        "Course : " + c.getTitle())
        );

        getSession.close();
    }
}