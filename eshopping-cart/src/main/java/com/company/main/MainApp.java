package com.company.main;

import java.util.Scanner;

import com.company.dao.ProductDAO;
import com.company.model.Product;
 
public class MainApp {
	public static void main(String[] args)
	{
		
		ProductDAO dao = new ProductDAO();
		Scanner sc = new Scanner(System.in);
		
		while(true)
		{
		System.out.println("\n1. Add product");
		System.out.println("2. View product");
		System.out.println("3. Update product");
		System.out.println("4. Delete product");
		System.out.println("5. Exit");
		int choice = sc.nextInt();
		
		switch(choice)
		{
		case 1:
			System.out.println("Enter name");
			String name = sc.next();
			System.out.println("Enter price");
			double price = sc.nextDouble();
			
			dao.addProduct(new Product(name, price));
			
		case 2:
			dao.getAllProducts();
			
			
		case 3:
		    System.out.println("Enter product id to update:");
		    int updateId = sc.nextInt();

		    System.out.println("Enter new name:");
		    String newName = sc.next();

		    System.out.println("Enter new price:");
		    double newPrice = sc.nextDouble();

		    dao.updateProduct(updateId, newName, newPrice);
		    break;
		    
		    
		case 4:
		    System.out.println("Enter product id to delete:");
		    int deleteId = sc.nextInt();

		    dao.deleteProduct(deleteId);
		    break;
		    
		
		case 5:
			System.exit(0);
		}
		}
		
	}
 
}