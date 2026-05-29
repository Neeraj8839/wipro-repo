package patternquestions;



public class FactoryDemo {

 

	public static void main(String[] args) {

		// TODO Auto-generated method stub

		Car obj1 = CarFactory.createCar("bmw");

		Car obj2 = CarFactory.createCar("audi");

		obj1.drive();

		obj2.drive();

 

	}

 

}

interface Car {

	   void drive();

	}

 

class Bmw  implements Car{

	

	

	public void drive()

	{

		System.out.println("bmw is driving");

	}

 

}

class Audi  implements Car{

	

	

	public void drive()

	{

		System.out.println("Audi is driving");

	}

 

}

class CarFactory {

 

	public static  Car  createCar(String type)

	{

		if(type.equalsIgnoreCase("bmw"))

		{

			return new Bmw();

		}

		else if (type.equalsIgnoreCase("audi"))

				{

			return new Audi();

				}

		else return null;

	}

}