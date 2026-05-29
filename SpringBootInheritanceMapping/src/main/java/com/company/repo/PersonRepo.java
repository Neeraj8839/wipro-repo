package com.company.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.company.entity.base.Person;

public interface PersonRepo extends JpaRepository<Person, Long> {

}
