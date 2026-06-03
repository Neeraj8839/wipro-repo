package bankingystem;

public class Main {
    public static void main(String[] args) {

        BankAccount acc1 = new BankAccount("Rahul", 1000);

        acc1.checkBalance();

        acc1.deposit(500);
        acc1.checkBalance();

        acc1.withdraw(300);
        acc1.checkBalance();

        acc1.withdraw(1500);
        acc1.checkBalance();
    }
}

class BankAccount {
    String accountHolder;
    double balance;

    BankAccount(String accountHolder, double balance) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    void deposit(double amount) {
        balance += amount;
        System.out.println(amount + " deposited successfully.");
    }

    void withdraw(double amount) {
        if (amount > balance) {
            System.out.println("Insufficient balance!");
        } else {
            balance -= amount;
            System.out.println(amount + " withdrawn successfully.");
        }
    }

    void checkBalance() {
        System.out.println("Account Holder: " + accountHolder);
        System.out.println("Current Balance: " + balance);
        System.out.println("----------------------");
    }
}


