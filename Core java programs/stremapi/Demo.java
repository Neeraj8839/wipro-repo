package stremapi;

//import java.util.ArrayList;
//
//import java.util.List;
//
//import java.util.function.Consumer;
//
//import java.util.function.Function;
//
//import java.util.function.Predicate;
//
//import java.util.function.Supplier;
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
//	
//
//		List<String> list = new ArrayList<String>();
//
//				
//
//				list.add("java");
//
//				list.add("c++");
//
//				list.add("c");
//
//				list.add("angular");
//
//				list.add("javascript");
//
//				list.add("jquery");
//
//				list.add("python");
//
//				list.add("c#");
//
//				list.add("react");
//
//                list.add("rust");
//
//				
//
//				list.stream()
//
//				.filter(x -> x.startsWith("j"))
//
//				.forEach(System.out::println);
//
//				
//
//		
//
//		
//
//		
//
//	}
//
//	}





// Example 2


//import java.util.ArrayList;
//
//import java.util.List;
//
//import java.util.function.Consumer;
//
//import java.util.function.Function;
//
//import java.util.function.Predicate;
//
//import java.util.function.Supplier;
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
//		List<Integer> list = new ArrayList<Integer>();
//
// 
//
//		list.add(3000);
//
//		list.add(4000);
//
//		list.add(8000);
//
//		list.add(9000);
//
//		list.add(9000);
//
//		list.add(2000);
//
//		list.add(10000);
//
//		list.add(12000);
//
//		list.add(2000);
//
//		list.add(2500);
//
// 
//
//		long result = list.stream()
//
//				          .map(x -> x + 500)
//
//				          .filter(x -> x > 3000)
//
//				          .count();
//
// 
//
//		System.out.println(result);
//
// 
//
//	}
//
//}
//





// Example 3



//import java.util.ArrayList;
//
//import java.util.List;
//
//import java.util.function.Consumer;
//
//import java.util.function.Function;
//
//import java.util.function.Predicate;
//
//import java.util.function.Supplier;
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
//		List<Integer> list = new ArrayList<Integer>();
//
// 
//
//		list.add(3000);
//
//		list.add(4000);
//
//		list.add(8000);
//
//		list.add(9000);
//
//		list.add(9000);
//
//		list.add(2000);
//
//		list.add(10000);
//
//		list.add(12000);
//
//		list.add(2000);
//
//		list.add(2500);
//
// 
//
//		                  list.stream()
//
//				          .map(x -> x + 500)
//
//				          .filter(x -> x > 3000)
//
//				          .forEach(System.out::println);
//
// 
//
//	
//
// 
//
//	}
//
//}
//
//





// Example 4



//public class Demo {
//
//	 
//
//	public static void main(String[] args) {
//
//		
//
//		List<Student> students=new ArrayList<Student>();
//
//		  Student s1=new Student("Sakshi",12);
//
//	      Student s2=new Student("Ram",22);
//
//	      Student s3=new Student("Sakshi",12);
//
//	      Student s4=new Student("Sneha",14);
//
//	      
//
//	      
//
//	      students.add(s1);
//
//	      students.add(s2);
//
//	      students.add(s3);
//
//	      students.add(s4);
//
// 
//
//	
//
//	         students.stream()
//
//	         .filter(x ->    x.getName().contains("S") )
//
//	         .map(x -> x.getName().toUpperCase())
//
//	         .forEach(System.out::println);
//
// 
//
//	}
//
//}
//
//














