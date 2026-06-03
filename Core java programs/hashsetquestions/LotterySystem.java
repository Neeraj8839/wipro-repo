package hashsetquestions;

import java.util.*;

public class LotterySystem {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        HashSet<Integer> tickets = new HashSet<>();

        System.out.print("Enter number of tickets: ");
        int n = sc.nextInt();

        for (int i = 0; i < n; i++) {
            System.out.print("Enter ticket number: ");
            int num = sc.nextInt();

            if (tickets.add(num)) {
                System.out.println("Ticket accepted");
            } else {
                System.out.println("Duplicate ticket! Rejected");
            }
        }

        sc.close();
    }
}
