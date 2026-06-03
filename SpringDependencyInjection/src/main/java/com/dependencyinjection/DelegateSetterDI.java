package com.dependencyinjection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class DelegateSetterDI {

    private Allocator allocator;

    @Autowired
    public void setAllocator(Allocator allocator) {

        this.allocator = allocator;

        System.out.println("Setter Injection Done");

    }

    public void notifyUser() {

        allocator.taskAllocation("Nitin");

    }

}



