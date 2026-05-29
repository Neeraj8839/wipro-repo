package com.dependencyinjection;

import org.springframework.stereotype.Component;

@Component
public class TeamLead implements Allocator {

    public TeamLead() {

        System.out.println("TeamLead Bean Created");

    }

    public void taskAllocation(String user) {

        System.out.println("Task allocated by TeamLead to : " + user);

    }

}