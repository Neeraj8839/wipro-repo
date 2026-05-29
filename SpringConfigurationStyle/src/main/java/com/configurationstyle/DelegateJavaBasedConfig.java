package com.configurationstyle;

public class DelegateJavaBasedConfig {

    private Allocator allocator;

    public DelegateJavaBasedConfig(Allocator allocator) {

        this.allocator = allocator;

    }

    public void notifyUser() {

        allocator.taskAllocation("Neeraj");

    }

}