package hashmapquestins;

import java.util.*;

public class EmployeeSalary {
    public static void main(String[] args) {

        HashMap<Integer, Double> map = new HashMap<>();

        
        map.put(1122333, 50000.0);
        map.put(223334444, 60000.0);
        map.put(334445555, 70000.0);

        
        int searchId = 334445555;

        if (map.containsKey(searchId)) {
            System.out.println("Salary: " + map.get(searchId));
        } else {
            System.out.println("Employee not found");
        }
    }
}