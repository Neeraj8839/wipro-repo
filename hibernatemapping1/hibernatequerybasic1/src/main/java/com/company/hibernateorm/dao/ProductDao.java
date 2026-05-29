package com.company.hibernateorm.dao;

import com.company.hibernateorm.config.HibernateUtil;
import com.company.hibernateorm.entity.Product;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Root;

import org.hibernate.Session;

import java.util.List;

public class ProductDao {

    /* ===========================
       HQL BASED QUERIES
       =========================== */

    // Get All Products
    public List<Product> getAllProducts() {

        try (Session session =
                     HibernateUtil.getSessionFactory().openSession()) {

            String hql = "from Product";

            return session
                    .createQuery(hql, Product.class)
                    .list();
        }
    }

    // Get Products By Price
    public List<Product> getByPrice(double price) {

        try (Session session =
                     HibernateUtil.getSessionFactory().openSession()) {

            String hql =
                    "from Product p where p.price = :price";

            return session
                    .createQuery(hql, Product.class)
                    .setParameter("price", price)
                    .list();
        }
    }

    // Search By Keyword
    public List<Product> searchByKeyword(String keyword) {

        try (Session session =
                     HibernateUtil.getSessionFactory().openSession()) {

            String hql =
                    "from Product p where p.name like :key";

            return session
                    .createQuery(hql, Product.class)
                    .setParameter(
                            "key",
                            "%" + keyword + "%"
                    )
                    .list();
        }
    }


    /* ===========================
       CRITERIA BASED QUERIES
       =========================== */

    // Find All Products
    public List<Product> findAllCriteria() {

        try (Session session =
                     HibernateUtil.getSessionFactory().openSession()) {

            CriteriaBuilder cb =
                    session.getCriteriaBuilder();

            CriteriaQuery<Product> cq =
                    cb.createQuery(Product.class);

            cq.from(Product.class);

            return session
                    .createQuery(cq)
                    .getResultList();
        }
    }

    // Find By Price
    public List<Product> findByPrice(double price) {

        try (Session session =
                     HibernateUtil.getSessionFactory().openSession()) {

            CriteriaBuilder cb =
                    session.getCriteriaBuilder();

            CriteriaQuery<Product> cq =
                    cb.createQuery(Product.class);

            Root<Product> root =
                    cq.from(Product.class);

            cq.where(
                    cb.equal(
                            root.get("price"),
                            price
                    )
            );

            return session
                    .createQuery(cq)
                    .getResultList();
        }
    }

    // Find Between Price
    public List<Product> getBetweenPrice(
            double minPrice,
            double maxPrice) {

        try (Session session =
                     HibernateUtil.getSessionFactory().openSession()) {

            CriteriaBuilder cb =
                    session.getCriteriaBuilder();

            CriteriaQuery<Product> cq =
                    cb.createQuery(Product.class);

            Root<Product> root =
                    cq.from(Product.class);

            cq.where(
                    cb.between(
                            root.get("price"),
                            minPrice,
                            maxPrice
                    )
            );

            return session
                    .createQuery(cq)
                    .getResultList();
        }
    }


    /* ===========================
       NATIVE SQL QUERIES
       =========================== */

    // Scalar Query
    public List<Object[]> findAll() {

        try (Session session =
                     HibernateUtil.getSessionFactory().openSession()) {

            String sql =
                    "select * from products";

            return session
                    .createNativeQuery(sql)
                    .list();
        }
    }

    // Entity Query
    public List<Product> getAll() {

        try (Session session =
                     HibernateUtil.getSessionFactory().openSession()) {

            String sql =
                    "select * from products";

            return session
                    .createNativeQuery(
                            sql,
                            Product.class
                    )
                    .list();
        }
    }

    // Parameterized Native Query
    public List<Product> getById(int id) {

        try (Session session =
                     HibernateUtil.getSessionFactory().openSession()) {

            String sql =
                    "select * from products where id = :id";

            return session
                    .createNativeQuery(
                            sql,
                            Product.class
                    )
                    .setParameter("id", id)
                    .list();
        }
    }
}