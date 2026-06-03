package newfeatures;




public class Main {

 

	public static void main(String[] args) {

		// TODO Auto-generated method stub

 

	}

 

}

 

 

sealed abstract class Shape permits Circle,Rectangle

{

	public abstract void area();

}

 

 

// A sealed class is a class that restricts inheritance to a fixed set of classes.

 

 

final class Circle extends Shape

{

 

	@Override

	public void area() {

	System.out.println(3.14*2.4*2.4);

		

	}

	

}

 

final class Rectangle extends Shape

{

 

	@Override

	public void area() {

		System.out.println(3*6);

		

	}

	

}




