package com.company.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.company.entity.Teacher;

public interface TeacherRepo extends JpaRepository<Teacher, Long> {

}