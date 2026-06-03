package com.company;

import com.company.service.BusinessClass;
import com.company.service.BusinessClass2;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringBootAopApplication
		implements CommandLineRunner {

	@Autowired
	BusinessClass service;

	@Autowired
	BusinessClass2 service1;

	public static void main(String[] args) {

		SpringApplication.run(
				SpringBootAopApplication.class, args);
	}

	@Override
	public void run(String... args)
			throws Exception {

		service.add();

		service.delete();

		service1.view();

		try {

			service.exceptionMethod();

		} catch (Exception e) {

			System.out.println(
					"Exception handled in main");
		}
	}
}