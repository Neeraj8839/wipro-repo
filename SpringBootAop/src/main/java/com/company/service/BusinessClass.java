package com.company.service;

import com.company.myannotation.MyAnno;
import org.springframework.stereotype.Service;

@Service
public class BusinessClass {

    @MyAnno
    public void add() {

        System.out.println(
                "Add Business Method Executed");

        System.out.println(10 / 2);
    }

    @MyAnno
    public void delete() {

        System.out.println(
                "Delete Business Method Executed");

        System.out.println(10 / 5);
    }

    @MyAnno
    public void exceptionMethod() {

        System.out.println(
                "Exception Method Executed");

        System.out.println(10 / 0);
    }
}