package collectionframework;

import java.util.ArrayList;

import java.util.List;

 

//public class LearnList {
//
// 
//
//	public static void main(String[] args) {
//
// 
//
//		List<Learner> learnerslist = new ArrayList<Learner>();
//
// 
//
//		Learner l1 = new Learner();
//
//		l1.setName("sakshi");
//
// 
//
//		Learner l2 = new Learner();
//
//		l2.setName("Mohit");
//
//		l2.setVideo("On");
//
// 
//
//		Learner l3 = new Learner();
//
//		l3.setName("Priyanshi");
//
//		l3.setVideo("On");
//
//		l3.setMic("On");
//
// 
//
//		learnerslist.add(l1);
//
//		learnerslist.add(l2);
//
//		learnerslist.add(l3);
//
//		
//
//		
//
//				
//
//		
//
//		for (Learner obj : learnerslist) {
//
//			System.out.println(obj.getName() + "\n" + obj.getMic() + "\n_____________________");
//
// 
//
//		}
//
// 
//
//	}
//
// 
//
//}




// Example 2



 

//public class LearnList {
//
// 
//
//	public static void main(String[] args) {
//
// 
//
//		
//
//		Learner l1 = new Learner();
//
//		l1.setName("sakshi");
//
// 
//
//		Learner l2 = new Learner();
//
//		l2.setName("Mohit");
//
//		l2.setVideo("On");
//
// 
//
//		Learner l3 = new Learner();
//
//		l3.setName("Priyanshi");
//
//		l3.setVideo("On");
//
//		l3.setMic("On");
//
//	
//
//		Learner l4 = new Learner();
//
//		l4.setName("Himanshi");
//
//		l4.setVideo("On");
//
//		l4.setMic("On");
//
//		
//
//		Learner l5 = new Learner();
//
//		l5.setName("Himanshi");
//
//		l5.setVideo("On");
//
//		l5.setMic("On");
//
//		
//
//		
//
//		List<Learner> learnerslist = new ArrayList<Learner>();
//
// 
//
// 
//
//		learnerslist.add(l1);
//
//		learnerslist.add(l2);
//
//		learnerslist.add(l3);
//
//		
//
//		
//
//		List<Learner> learnerslist2 = new ArrayList<Learner>();
//
//		
//
//		learnerslist2.add(l4);
//
//		learnerslist2.add(l5);
//
//		learnerslist2.addAll(learnerslist);
//
//		
//
//		
//
// 
//
//		for (Learner obj : learnerslist2) {
//
//			System.out.println(obj.getName() + "\n" + obj.getMic() + "\n_____________________");
//
// 
//
//		}
//
// 
//
//	}
//
// 
//
//}
//
//



//Example 3





//
//import java.util.ArrayList;
//
//import java.util.List;
//
// 
//
//public class LearnList {
//
// 
//
//	public static void main(String[] args) {
//
// 
//
//		
//
//		Learner l1 = new Learner();
//
//		l1.setName("sakshi");
//
// 
//
//		Learner l2 = new Learner();
//
//		l2.setName("Mohit");
//
//		l2.setVideo("On");
//
// 
//
//		Learner l3 = new Learner();
//
//		l3.setName("Priyanshi");
//
//		l3.setVideo("On");
//
//		l3.setMic("On");
//
//	
//
//		Learner l4 = new Learner();
//
//		l4.setName("Himanshi");
//
//		l4.setVideo("On");
//
//		l4.setMic("On");
//
//		
//
//		Learner l5 = new Learner();
//
//		l5.setName("Himanshi");
//
//		l5.setVideo("On");
//
//		l5.setMic("On");
//
//		
//
//		
//
//		List<Learner> learnerslist1 = new ArrayList<Learner>();
//
// 
//
// 
//
//		learnerslist1.add(l1);
//
//		learnerslist1.add(l2);
//
//		learnerslist1.add(l3);
//
//		
//
//		
//
//		List<Learner> learnerslist2 = new ArrayList<Learner>();
//
//		
//
//		learnerslist2.add(l4);
//
//		learnerslist2.add(l5);
//
//		
//
//		
//
//		
//
//		
//
//		List<List<Learner>>  listofLearners=new ArrayList<>();
//
//		listofLearners.add(learnerslist1);
//
//		listofLearners.add(learnerslist2);
//
// 
//
//		for (List<Learner> list : listofLearners) {
//
//			System.out.println(list+"\n ____________");
//
//		}
//
// 
//
//	}
//
// 
//
//}



//Example 4








//import java.util.ArrayList;
//
//import java.util.LinkedList;
//
//import java.util.List;
//
// 
//
//public class LearnList {
//
// 
//
//	public static void main(String[] args) {
//
//		
//
//		Learner l1 = new Learner();
//
//		l1.setName("sakshi");
//
// 
//
//		Learner l2 = new Learner();
//
//		l2.setName("Mohit");
//
//		l2.setVideo("On");
//
// 
//
//		Learner l3 = new Learner();
//
//		l3.setName("Priyanshi");
//
//		l3.setVideo("On");
//
//		l3.setMic("On");
//
//	
//
//		Learner l4 = new Learner();
//
//		l4.setName("Shivani");
//
//		l4.setVideo("On");
//
//		l4.setMic("On");
//
//		
//
//		Learner l5 = new Learner();
//
//		l5.setName("Himanshi");
//
//		l5.setVideo("On");
//
//		l5.setMic("On");
//
//		
//
//		
//
//		List<Learner> learnerslist1 = new ArrayList<Learner>();
//
// 
//
//		learnerslist1.add(l1);
//
//		learnerslist1.add(l2);
//
//		learnerslist1.add(l3);
//
//		learnerslist1.add(l4);
//
//		learnerslist1.add(l5);
//
//		
//
//	  for(Learner l: learnerslist1)
//
//	  {
//
//		  if(l.getName().endsWith("i")) 
//
//		  {
//
//        System.out.println(l.getName());
//
//        System.out.println("mic: "+l.getMic());
//
//        System.out.println("video: "+l.getVideo()+"\n____________________");
//
//		  }
//
//	}
//
// 
//
//}}





// Example  HASHMAP




//import java.util.HashMap;
//
//import java.util.HashSet;
//
// 
//
//import java.util.Map;
//
// 
//
//public class LearnList {
//
// 
//
//	public static void main(String[] args) {
//
//		
//
//    Map<Integer,String>  setData=new HashMap();
//
//    
//
//    setData.put(1,"java");
//
//    setData.put(2,"python");
//
//    setData.put(3,"C++");   
//
//    setData.put(null,"react");
//
//  
//
//    System.out.println(setData);
//
// 
//
//}}



// Example 2




import java.util.HashMap;

import java.util.HashSet;

 

import java.util.Map;

import java.util.Map.Entry;

 

public class LearnList {

 

	public static void main(String[] args) {

 

		Map<Integer, String> map = new HashMap();

 

		map.put(1, "java");

		map.put(2, "python");

		map.put(3, "C++");

		map.put(null, "react");

 

		for (Entry<Integer, String> obj : map.entrySet()) {

			System.out.print(obj.getKey() + " : ");

			System.out.println(obj.getValue() + "\n________________");

		}

	}

}




























