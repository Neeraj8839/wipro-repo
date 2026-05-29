package atmsystem;
import java.util.*;

public class ATM {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double balance = 1000;

        while (true) {
            System.out.println("\n1.Check 2.Deposit 3.Withdraw 4.Exit");
            System.out.print("Enter choice: ");

            try {
                int ch = sc.nextInt();

                if (ch == 1) {
                    System.out.println("Balance: " + balance);
                } 
                else if (ch == 2) {
                    System.out.print("Enter amount: ");
                    double amt = sc.nextDouble();
                    if (amt <= 0) throw new Exception("Invalid amount");
                    balance += amt;
                    System.out.println("Deposited!");
                } 
                else if (ch == 3) {
                    System.out.print("Enter amount: ");
                    double amt = sc.nextDouble();
                    if (amt > balance) throw new Exception("Low balance");
                    balance -= amt;
                    System.out.println("Withdrawn!");
                } 
                else if (ch == 4) {
                    break;
                } 
                else {
                    System.out.println("Wrong choice!");
                }

            } catch (Exception e) {
                System.out.println("Error: " + e.getMessage());
                sc.nextLine(); // clear input
            }
        }
    }
}
