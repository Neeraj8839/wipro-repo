package com.configurationstyle;

public class Manager implements Allocator {

//    @Override
    public void taskAllocation(String user) {

        System.out.println("Task allocated to " + user);

    }
}