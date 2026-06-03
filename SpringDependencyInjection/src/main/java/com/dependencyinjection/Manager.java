package com.dependencyinjection;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component
@Primary
public class Manager implements Allocator {

    public Manager() {

        System.out.println("Manager Bean Created");

    }

    public void taskAllocation(String user) {

        System.out.println("Task allocated by Manager to : " + user);

    }

}
