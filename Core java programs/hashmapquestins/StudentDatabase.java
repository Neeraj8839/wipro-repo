package hashmapquestins;

import java.util.*;

public class StudentDatabase {
    public static void main(String[] args) {

        HashMap<Integer, String> map = new HashMap<>();

        
        map.put(101, "Rahul");
        map.put(102, "Amit");
        map.put(103, "Neha");

       
        int searchId = 102;

        if (map.containsKey(searchId)) {
            System.out.println("Student Name: " + map.get(searchId));
        } else {
            System.out.println("ID not found");
        }
    }
}