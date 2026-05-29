package com.dependencyinjection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class DelegateFieldDI {

    @Autowired
    private Allocator allocator;

    public void notifyUser() {

        allocator.taskAllocation("Neeraj");

        System.out.println("Field Injection Done");

    }

}



