package com.lifecyclescope;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

@Service
@Scope("singleton")
public class Manager implements Allocator {

    @PostConstruct
    public void init() {

        System.out.println("Welcome to this Bean Class and Task Allocation Details");

    }

    @Override
    public void taskAllocation(String user) {

        System.out.println("Task is allocated by Manager to : " + user);

    }

    @PreDestroy
    public void destroy() {

        System.out.println("Task Allocated : All The Best!");

    }

}