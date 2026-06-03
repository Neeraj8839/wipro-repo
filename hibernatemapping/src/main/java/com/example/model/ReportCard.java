package com.example.model;

import jakarta.persistence.*;

@Entity
@Table(name = "reportcard")
public class ReportCard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private double marks;

    public ReportCard() {
    }

    public ReportCard(double marks) {

        this.marks = marks;
    }

    public Long getId() {

        return id;
    }

    public void setId(Long id) {

        this.id = id;
    }

    public double getMarks() {

        return marks;
    }

    public void setMarks(double marks) {

        this.marks = marks;
    }

    @Override
    public String toString() {

        return "ReportCard{" +
                "id=" + id +
                ", marks=" + marks +
                '}';
    }


    /* Bidirectional Mapping */

    // Uncomment if needed

//    @OneToOne(mappedBy = "reportcard")
//    private Student student;
//
//    public Student getStudent() {
//        return student;
//    }
//
//    public void setStudent(Student student) {
//        this.student = student;
//    }

}