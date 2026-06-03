//package com.lms.entity;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import javax.persistence.*;
//
//@Entity
//@Table(name = "courses")
//
//public class Course {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//
//    private int id;
//
//    private String title;
//
//    @ManyToMany(mappedBy = "courses")
//
//    private List<Student> students = new ArrayList<>();
//
//    public Course() {
//    }
//
//    public Course(String title) {
//        this.title = title;
//    }
//
//    public int getId() {
//        return id;
//    }
//
//    public String getTitle() {
//        return title;
//    }
//
//    public List<Student> getStudents() {
//        return students;
//    }
//
//    public void setTitle(String title) {
//        this.title = title;
//    }
//}






//package com.lms.entity;
//
//import javax.persistence.*;
//
//@Entity
//@Table(name = "courses")
//
//public class Course {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//
//    private int id;
//
//    private String title;
//
//    public Course() {
//    }
//
//    public int getId() {
//        return id;
//    }
//
//    public void setId(int id) {
//        this.id = id;
//    }
//
//    public String getTitle() {
//        return title;
//    }
//
//    public void setTitle(String title) {
//        this.title = title;
//    }
//}








package com.lms.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

@Entity
@Table(name="courses")
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String title;

    @ManyToMany(mappedBy = "courses")
    private List<Student> students =
            new ArrayList<>();

    public Course() {
    }

    public Course(String title) {
        this.title = title;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<Student> getStudents() {
        return students;
    }

    public void setStudents(List<Student> students) {
        this.students = students;
    }
}