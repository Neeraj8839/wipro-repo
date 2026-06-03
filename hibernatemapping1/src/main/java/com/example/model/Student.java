package com.example.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "students")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "reportcard_id")
    private ReportCard reportcard;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "student_id")
    private List<Course> courses = new ArrayList<>();

    public Student() {
    }

    public Student(String name) {
        this.name = name;
    }

    public void addCourse(Course c) {
        this.courses.add(c);
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public ReportCard getReportcard() {
        return reportcard;
    }

    public List<Course> getCourses() {
        return courses;
    }

    public void setReportcard(ReportCard reportcard) {
        this.reportcard = reportcard;
    }
}