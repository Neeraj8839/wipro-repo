package com.company.hibernateorm.dao;

import com.company.hibernateorm.config.HibernateUtil;
import com.company.hibernateorm.entity.Product;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.List;

public class ProductDao {

    // Save Product
    public void saveProduct(Product product) {

        Transaction transaction = null;

        try (Session session =
                     HibernateUtil.getSessionFactory().openSession()) {

            transaction = session.beginTransaction();

            session.persist(product);

            transaction.commit();

        } catch (Exception e) {

            if (transaction != null) {
                transaction.rollback();
            }

            e.printStackTrace();
        }
    }

    // Fetch All Products
    public List<Product> getAllProducts() {

        try (Session session =
                     HibernateUtil.getSessionFactory().openSession()) {

            return session
                    .createQuery("from Product", Product.class)
                    .list();
        }
    }
}