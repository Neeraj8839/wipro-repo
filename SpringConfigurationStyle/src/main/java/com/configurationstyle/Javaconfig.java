package com.configurationstyle;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class Javaconfig {

    @Bean
    public Allocator allocator() {

        return new Manager();

    }

    @Bean
    public DelegateJavaBasedConfig delegateJavaBasedConfig() {

        return new DelegateJavaBasedConfig(allocator());

    }

}



