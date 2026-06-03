package employeesystem;
abstract class Employee {
    String name;
    double salary;

    // Constructor
    Employee(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }

    // Abstract method
    abstract double calculateBonus();

    // Method to print details
    void display() {
        System.out.println("Name: " + name);
        System.out.println("Salary: " + salary);
        System.out.println("Bonus: " + calculateBonus());
        System.out.println("----------------------");
    }
}

// Manager class
class Manager extends Employee {

    Manager(String name, double salary) {
        super(name, salary);
    }

    double calculateBonus() {
        return salary * 0.20; // 20%
    }
}

// Developer class
class Developer extends Employee {

    Developer(String name, double salary) {
        super(name, salary);
    }

    double calculateBonus() {
        return salary * 0.10; // 10%
    }
}

// Main class
public class Main {
    public static void main(String[] args) {

        Employee e1 = new Manager("Rahul", 50000);
        Employee e2 = new Developer("Aman", 40000);

        e1.display();
        e2.display();
    }
}