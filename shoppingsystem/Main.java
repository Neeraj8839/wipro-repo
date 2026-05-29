package shoppingsystem;

public class Main {
    public static void main(String[] args) {

        Product p1 = new Electronics("Laptop", 50000);
        Product p2 = new Clothing("T-Shirt", 2000);

        Discount d1 = (Discount) p1;
        Discount d2 = (Discount) p2;

        System.out.println("Electronics Price: " + p1.getPrice());
        System.out.println("After Discount: " + d1.applyDiscount());



        System.out.println("Clothing Price: " + p2.getPrice());
        System.out.println("After Discount: " + d2.applyDiscount());
    }
}

abstract class Product {
    String name;
    double price;

    Product(String name, double price) {
        this.name = name;
        this.price = price;
    }

    abstract double getPrice();
}


interface Discount {
    double applyDiscount();
}


class Electronics extends Product implements Discount {

    Electronics(String name, double price) {
        super(name, price);
    }

    
    double getPrice() {
        return price;
    }

    public double applyDiscount() {
        return price * 0.90;
    }
}


class Clothing extends Product implements Discount {

    Clothing(String name, double price) {
        super(name, price);
    }

    double getPrice() {
        return price;
    }

   
    public double applyDiscount() {
        return price * 0.80;
    }
}

