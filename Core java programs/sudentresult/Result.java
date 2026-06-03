package sudentresult;

import java.util.*;

class MarksException extends Exception {
	MarksException(String msg) {
		super(msg);
	}
}

public class Result {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		try {
			int[] m = new int[3];
			int total = 0;
			
			System.out.println("Enter 3 marks:");
			
			for (int i = 0; i < 3; i++) {
				m[i] = sc.nextInt();
				if (m[i] < 0 || m[i] > 100)
					throw new MarksException("Invalid Marks!");
				total += m[i];
			}
			
			double avg = total / 3.0;
			System.out.println("Total: " + total);
			System.out.println("Average: " +avg);
			System.out.println(avg >= 40 ? "PASS" : "FAIL");
			
		} catch (MarksException e) {
			System.out.println(e.getMessage());
		
		} catch (Exception e) {
			System.out.println("Wrong Input!");
		}
		

	}

}
