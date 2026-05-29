package com.configurationstyle;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App {

    public static void main(String[] args) {

        // Java Configuration Style

        ApplicationContext javaContext =
                new AnnotationConfigApplicationContext(Javaconfig.class);

        DelegateJavaBasedConfig javaBean =
                javaContext.getBean(DelegateJavaBasedConfig.class);

        System.out.println("\n--- Java Based Configuration ---");

        javaBean.notifyUser();



        // XML Configuration Style

        ApplicationContext xmlContext =
                new ClassPathXmlApplicationContext("applicationContext.xml");

        DelegateXMLBased xmlBean =
                xmlContext.getBean(DelegateXMLBased.class);

        System.out.println("\n--- XML Based Configuration ---");

        xmlBean.notifyUser();

    }

}