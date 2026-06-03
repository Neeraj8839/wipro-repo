package com.wipro.springExample;

public class Manager implements Allocator {

    @Override
    public void taskAllocation(String user) {

        System.out.println(
        "Task is allocated by Manager to " + user);
    }
}