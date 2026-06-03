package com.company.hibernateorm;

import com.company.hibernateorm.config.HibernateUtil;
import com.company.hibernateorm.dao.ProductDao;
import com.company.hibernateorm.entity.Category;
import com.company.hibernateorm.entity.Product;

import org.hibernate.Session;
import org.hibernate.Transaction;

public class App {

    public static void main(String[] args) {

        try (Session session =
                     HibernateUtil
                             .getSessionFactory()
                             .openSession()) {

            Transaction tx =
                    session.beginTransaction();

            // Categories

            Category category1 =
                    new Category("Electronics");

            Category category2 =
                    new Category("Stationary");

            Category category3 =
                    new Category("PoojaItems");

            // Save Categories

            session.persist(category1);
            session.persist(category2);
            session.persist(category3);

            // Save Products

            session.persist(
                    new Product(
                            "Laptop",
                            50000,
                            category1
                    )
            );

            session.persist(
                    new Product(
                            "Tablet",
                            50000,
                            category1
                    )
            );

            session.persist(
                    new Product(
                            "Mouse",
                            50000,
                            category1
                    )
            );

            session.persist(
                    new Product(
                            "Book",
                            150,
                            category2
                    )
            );

            session.persist(
                    new Product(
                            "Pencil",
                            10,
                            category2
                    )
            );

            session.persist(
                    new Product(
                            "Pen",
                            150,
                            category2
                    )
            );

            ProductDao dao =
                    new ProductDao();

            /* ===========================
               PART 1 : HQL QUERIES
               =========================== */

            System.out.println(
                    "\n===== HQL BASED QUERIES ====="
            );

            System.out.println(
                    "\n1. To list out all the products"
            );

            dao.getAllProducts()
                    .forEach(System.out::println);

            System.out.println(
                    "\n2. To list out all products based on price"
            );

            dao.getByPrice(50000)
                    .forEach(System.out::println);

            System.out.println(
                    "\n3. Search product by keyword"
            );

            dao.searchByKeyword("Lap")
                    .forEach(System.out::println);


            /* ===========================
               PART 2 : CRITERIA QUERIES
               =========================== */

            System.out.println(
                    "\n===== CRITERIA BASED QUERIES ====="
            );

            System.out.println(
                    "\n1. Display all products"
            );

            dao.findAllCriteria()
                    .forEach(System.out::println);

            System.out.println(
                    "\n2. Display products by price"
            );

            dao.findByPrice(50000)
                    .forEach(System.out::println);

            System.out.println(
                    "\n3. Display products between price range"
            );

            dao.getBetweenPrice(50, 50000)
                    .forEach(System.out::println);


            /* ===========================
               PART 3 : NATIVE SQL QUERIES
               =========================== */

            System.out.println(
                    "\n===== NATIVE SQL QUERIES ====="
            );

            System.out.println(
                    "\n1. Display products using Object[]"
            );

            dao.findAll()
                    .forEach(
                            p -> System.out.println(
                                    p[0] + " "
                                            + p[1] + " "
                                            + p[2]
                            )
                    );

            System.out.println(
                    "\n2. Display products using entity class"
            );

            dao.getAll()
                    .forEach(System.out::println);

            System.out.println(
                    "\n3. Display product by ID"
            );

            dao.getById(2)
                    .forEach(System.out::println);

            tx.commit();
        }
    }
}