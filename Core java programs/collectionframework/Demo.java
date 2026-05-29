package collectionframework;

import java.util.*;


// public class Demo {
//
// 
//
//	public static void main(String[] args) {
//
// 
//
//		List<String> emplist = new ArrayList<String>();
//
// 
//
//		emplist.add("sakshi");
//
//		emplist.add("Neha");
//
//		emplist.add("Rohit");
//
// 
//
//		System.out.println(emplist);
//
// 
//
//		List list = new ArrayList(); // Object
//
//		list.add(234);
//
//		list.add("sakshi");
//
//		list.add(true);
//
//		list.add(34.5f);
//
//		
//
//		System.out.println(list);
//
// 
//
//}
//}




// Example 2


//
// import java.util.ArrayList;
//
// import java.util.LinkedList;
//
// import java.util.List;
//
//  
//
// public class Demo {
//
//  
//
// 	public static void main(String[] args) {
//
//  
//
// 		List<String> emplist = new ArrayList<String>();
//
//  
//
// 		emplist.add("sakshi");
//
// 		emplist.add("Neha");
//
// 		emplist.add("Rohit");
//
//  
//
// 		System.out.println(emplist);
//
//  
//
// 		List list = new ArrayList(); // Object
//
// 		list.add(234);
//
// 		list.add("sakshi");
//
// 		list.add(true);
//
// 		list.add(34.5f);
//
// 		
//
// 		System.out.println(list);
//
//  
//
// 	}}


// Example 3


//import java.util.ArrayList;
//
//import java.util.LinkedList;
//
//import java.util.List;
//
// 
//
//public class Demo {
//
// 
//
//	public static void main(String[] args) {
//
// 
//
//		List<String> emplist = new ArrayList<String>();
//
// 
//
//		emplist.add("Aakshi");
//
//		emplist.add("Neha");
//
//		emplist.add("Rohit");
//
//		emplist.add("Akash");
//
// 
//
//		for (String element : emplist) {
//
//			if (element.startsWith("A"))
//
//				System.out.println(element);
//
//		}
//
// 
//
//		List<Integer> emplist2 = new ArrayList<Integer>();
//
// 
//
//		emplist2.add(23);
//
//		emplist2.add(45);
//
//		emplist2.add(33);
//
//		for (int element : emplist2) {
//
// 
//
//			System.out.println(element);
//
//		}
//
// 
//
//	}}
//
//




// ARRAYLIST Example



import java.util.ArrayList;

import java.util.Iterator;

import java.util.LinkedList;

import java.util.List;

import java.util.ListIterator;

 

public class Demo {

 

	public static void main(String[] args) {

 

		List<String> emplist = new ArrayList<String>();

 

		emplist.add("Aakshi");

		emplist.add("Neha");

		emplist.add("Rohit");

		emplist.add("Akash");

 

		ListIterator<String> empItr = emplist.listIterator();

 

		// Traversing elements using next() method

		while (empItr.hasNext()) {

			System.out.println(empItr.next());

		}

 

		while (empItr.hasPrevious()) {

			System.out.println(empItr.previous());

		}

	}}












