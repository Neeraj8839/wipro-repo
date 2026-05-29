package com.company.hibernateorm;

import com.company.hibernateorm.dao.ProductDao;
import com.company.hibernateorm.entity.Product;

import java.util.List;

public class App {

    public static void main(String[] args) {

        ProductDao dao = new ProductDao();

        // Insert Data
        dao.saveProduct(new Product("Laptop", 55000));
        dao.saveProduct(new Product("Mobile", 25000));

        // Fetch Data
        List<Product> products = dao.getAllProducts();

        for (Product p : products) {

            System.out.println(
                    p.getId() + " "
                            + p.getName() + " "
                            + p.getPrice()
            );
        }
    }
}