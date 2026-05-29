package com.configurationstyle;

public class DelegateXMLBased {

    private Allocator allocator;

    public void setAllocator(Allocator allocator) {

        this.allocator = allocator;

    }

    public void notifyUser() {

        allocator.taskAllocation("Neeraj");

    }

}


