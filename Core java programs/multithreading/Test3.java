package multithreading;


//class Test3 {
//
// public static void main(String[] args) {
//
//    
//
//  	Object obj3=10;
//
//		
//
//		switch(obj3)
//
//		{
//
//		case String s -> System.out.println("string: "+s);
//
//		case Integer i -> System.out.println("Integer :"+i);
//
//		case null -> System.out.println("null value");
//
//		default -> System.out.println("unknown type");
//
//		}
//
//		
//
//		
//
//		
//
//		
//
//		Object obj4=new Person("Xyz",12);
//
//		if(obj4 instanceof Person(String name,int age))
//
//		{
//
//			System.out.println(name+" - "+age);
//
//		}
//
// }
//
//}
//
//
//
//record Person(String name,int age)
//
//		{
//
//			
//
//		}



//  Example





public class Test3 {

	public static void main(String[] args) {

 

		// example1

		Object obj1 = "Hello";

		if (obj1 instanceof String  x) {

			System.out.println(x.length());

		}

 

		

		//example2 

		Object obj2= "hello";

		

		if(obj2 instanceof String str)

		System.out.println("String: "+str);

		else if (obj2 instanceof Integer num)

			System.out.println("Integer: "+num);

		else

			System.out.println("Unknown type");

		

		//example 3

		

     	Object obj3="Jaa";

		

	switch(obj3)
		{

      case String s -> System.out.println(s);

		case Integer i -> System.out.println(i);

		case null -> System.out.println("null value");

		default -> System.out.println("unknown type");
		}
	


//		example 4
//
//		
//
		if(obj3 instanceof String str && str.length()>3)

		{

			System.out.println("Long string : "+str);

		}

		else

			System.out.println("shorter length : ");

		

	}

}










