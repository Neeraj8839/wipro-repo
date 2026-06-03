package bankingsystems;

import java.util.Scanner;

public class Main {
	  public static void main(String[] args) {
	      Scanner sc = new Scanner(System.in);
	      Bank b = new Bank();

	      int choice;
	      char ch;

	      do {
	          System.out.println("\n1. Credit");
	          System.out.println("2. Debit");
	          System.out.println("3. Check Balance");
	          System.out.print("Enter choice: ");
	          choice = sc.nextInt();

	          if (choice == 1) {
	              System.out.print("Enter amount: ");
	              int amt = sc.nextInt();
	              b.credit(amt);
	          }
	          else if (choice == 2) {
	              System.out.print("Enter amount: ");
	              int amt = sc.nextInt();
	              b.debit(amt);
	          }
	          else if (choice == 3) {
	              b.showBalance();
	          }
	          else {
	              System.out.println("Wrong choice");
	          }

	          System.out.print("Continue? (y/n): ");
	          ch = sc.next().charAt(0);

	      } while (ch == 'y');

	      System.out.println("Thank you!");
	  }
	}

//Interface
interface BankOperations {
  void credit(int amount);
  void debit(int amount);
}

//Abstract class
abstract class Account {
  int balance = 1000;

  // concrete method
  void showBalance() {
      System.out.println("Balance = " + balance);
  }
}

//Concrete class
class Bank extends Account implements BankOperations {

  public void credit(int amount) {
      balance += amount;
      System.out.println("Money Added");
  }

  public void debit(int amount) {
      if (amount <= balance) {
          balance -= amount;
          System.out.println("Money Deducted");
      } else {
          System.out.println("Not enough balance");
      }
  }
}


