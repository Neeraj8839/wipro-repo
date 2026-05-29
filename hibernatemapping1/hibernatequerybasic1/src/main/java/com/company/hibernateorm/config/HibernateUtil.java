package com.company.hibernateorm.config;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class HibernateUtil {

    private static final SessionFactory factory;

    static {

        try {

            factory = new Configuration()
                    .configure("hibernate.cfg.xml")
                    .buildSessionFactory();

        } catch (Exception e) {

            throw new RuntimeException(e);
        }
    }

    public static SessionFactory getSessionFactory() {

        return factory;
    }
}