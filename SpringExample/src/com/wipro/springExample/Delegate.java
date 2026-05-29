package com.wipro.springExample;

public class Delegate {

    private Allocator allocator;

    // Constructor Injection

    public Delegate(Allocator allocator) {

        this.allocator = allocator;
    }

    public void notifyUser() {

        allocator.taskAllocation("Neeraj");
    }
}