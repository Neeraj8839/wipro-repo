package com.company.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.company.entity.Student;

public interface StudentRepo extends JpaRepository<Student, Long> {

}