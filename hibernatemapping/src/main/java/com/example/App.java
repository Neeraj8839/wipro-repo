package com.example;

import com.example.model.ReportCard;
import com.example.model.Student;
import com.example.util.HibernateUtil;

import org.hibernate.Session;
import org.hibernate.Transaction;

public class App {

    public static void main(String[] args) {

        try (Session session =
                     HibernateUtil
                             .getSessionFactory()
                             .openSession()) {

            Transaction tx =
                    session.beginTransaction();

            // Create Student

            Student student =
                    new Student("Dheeraj");

            // Create ReportCard

            ReportCard reportCard =
                    new ReportCard(89.5);

            // Set Relationship

            student.setReportcard(reportCard);

            // Save Object

            session.persist(student);

            tx.commit();

            System.out.println(
                    "\n===== STUDENT DETAILS ====="
            );

            System.out.println(
                    "Student ID : "
                            + student.getId()
            );

            System.out.println(
                    "Student Name : "
                            + student.getName()
            );

            System.out.println(
                    "Marks : "
                            + student
                            .getReportcard()
                            .getMarks()
            );

            System.out.println(
                    "\nData Inserted Successfully"
            );
        }

        HibernateUtil.close();
    }
}