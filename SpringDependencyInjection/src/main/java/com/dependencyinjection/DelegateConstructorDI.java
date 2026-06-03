package com.dependencyinjection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class DelegateConstructorDI {

    private final Allocator allocator;

    @Autowired
    public DelegateConstructorDI(Allocator allocator) {

        this.allocator = allocator;

        System.out.println("Constructor Injection Done");

    }

    public void notifyUser() {

        allocator.taskAllocation("Neeraj");

    }

}
