package com.dependencyinjection;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class App {

    public static void main(String[] args) {

        AnnotationConfigApplicationContext context =
                new AnnotationConfigApplicationContext(AppConfig.class);

        System.out.println("\n----- Constructor Injection -----");
        DelegateConstructorDI constructorDI =
                context.getBean(DelegateConstructorDI.class);

        constructorDI.notifyUser();

        System.out.println("\n----- Setter Injection -----");
        DelegateSetterDI setterDI =
                context.getBean(DelegateSetterDI.class);

        setterDI.notifyUser();

        System.out.println("\n----- Field Injection -----");
        DelegateFieldDI fieldDI =
                context.getBean(DelegateFieldDI.class);

        fieldDI.notifyUser();

        context.close();

    }

}



 