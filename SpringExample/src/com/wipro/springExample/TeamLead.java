package com.wipro.springExample;

public class TeamLead implements Allocator {

    @Override
    public void taskAllocation(String user) {

        System.out.println(
        "Task is allocated by TeamLead to " + user);
    }
}