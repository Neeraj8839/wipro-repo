package com.lifecyclescope;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class App {

    public static void main(String[] args) {

        AnnotationConfigApplicationContext context =
                new AnnotationConfigApplicationContext(AppConfig.class);

        Delegate delegate = context.getBean(Delegate.class);

        delegate.notifyUser();

        context.close();

    }

}