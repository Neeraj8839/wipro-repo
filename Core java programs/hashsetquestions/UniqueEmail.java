package hashsetquestions;

import java.util.*;

public class UniqueEmail {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        HashSet<String> emails = new HashSet<>();

        System.out.print("Enter number of emails: ");
        int n = sc.nextInt();
        sc.nextLine();

        for (int i = 0; i < n; i++) {
            System.out.print("Enter email: ");
            String email = sc.nextLine();

            if (emails.add(email)) {
                System.out.println("Registered successfully");
            } else {
                System.out.println("Duplicate email! Not allowed");
            }
        }

        sc.close();
    }
}