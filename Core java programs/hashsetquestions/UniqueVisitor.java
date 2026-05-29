package hashsetquestions;

import java.util.*;

public class UniqueVisitor {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        HashSet<String> visitors = new HashSet<>();

        System.out.print("Enter number of visitors: ");
        int n = sc.nextInt();
        sc.nextLine();

        for (int i = 0; i < n; i++) {
            System.out.print("Enter visitor ID: ");
            String id = sc.nextLine();
            visitors.add(id);
        }

        System.out.println("Unique visitors count: " + visitors.size());

        sc.close();
    }
}
