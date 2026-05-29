package multithreading;

//public class Demo extends Thread{
//
//	 
//
//	public static void main(String[] args) {
//
//		
//
//		
//
//		Demo d1=new Demo();  //creating a thread1
//
//		  d1.setName("t1");
//
//		  d1.start(); // starting a thread 1
//
//		  Demo d2=new Demo();  //creating a thread2
//
//		  d2.setName("t2");
//
//		  d2.start(); // starting a thread 2
//
// 
//
//	}
//
//	
//
//	void printTable(int num)
//
//	{
//
//		for(int i=1;i<=10;i++)
//
//		{
//
//			System.out.println(num+" * "+i+" = "+(num*i)+" - "+currentThread().getName());
//
//			
//
//		}
//
//	}
//
//	
//
//	
//
//	
//
//	public void run()   // running the thread
//
//	{
//
//		
//
//		printTable(3);
//
//	}
//
// 
//
//}
//
//



// Example


//public class Demo extends Thread {
//
//	 
//
//	public static void main(String[] args) {
//
// 
//
//		Demo d1 = new Demo(); // creating a thread1
//
//		d1.setName("t1");
//
//		d1.start(); // starting a thread 1
//
//		Demo d2 = new Demo(); // creating a thread2
//
//		d2.setName("t2");
//
//		d2.start(); // starting a thread 2
//
// 
//
//	}
//
// 
//
//	void printTable(int num) {
//
//		for (int i = 1; i <= 10; i++) {
//
//			System.out.println(num + " * " + i + " = " + (num * i) + " - " + currentThread().getName());
//
// 
//
//		}
//
//	}
//
// 
//
//	void reverseCounting() {
//
//		for (int i = 10; i >= 1; i--)
//
//			System.out.println(i + " - " + currentThread().getName());
//
//	}
//
// 
//
//	public void run() // running the thread
//
//	{
//
//		if (currentThread().getName().equals("t1"))
//
//			printTable(3);
//
//		else if(currentThread().getName().equals("t2")) 
//
//			reverseCounting();
//
//	}
//
// 
//
//}



//Example



//public class Demo implements Runnable{
//
// 
//
//	public static void main(String[] args) {
//
// 
//
//		Demo d1 = new Demo(); // creating a thread1
//
//		Thread obj1=new Thread(d1);

//		
//
//		obj1.setName("t1");
//
//		obj1.start(); // starting a thread 1
//
//		
//
//		
//
//		Demo d2 = new Demo(); // creating a thread2
//
//		Thread obj2=new Thread(d2);
//
//		
//
//		
//
//		obj2.setName("t2");
//
//		obj2.start(); // starting a thread 2
//
// 
//
//	}
//
// 
//
//	void printTable(int num) {
//
//		for (int i = 1; i <= 10; i++) {
//
//			System.out.println(num + " * " + i + " = " + (num * i) + " - " +Thread.currentThread().getName());
//
// 
//
//		}
//
//	}
//
//	
//
//	
//
//	void counting()
//
//	{
//
//		for(int i=1;i<=10;i++)
//
//			System.out.println(i+"- "+Thread.currentThread().getName());
//
//	}
//
// 
//
//	public void run() // running the thread
//
//	{
//
//		if(Thread.currentThread().getName().equals("t1"))
//
//			printTable(3);
//
//	   
//
//		else if (Thread.currentThread().getName().equalsIgnoreCase("t2"))
//
//			counting();
//
//		
//
//		
//
//	}
//
// 
//
//}
//



//Example

//public class Demo implements Runnable{
//
// 
//
//	public static void main(String[] args) {
//
// 
//
//		Demo d1 = new Demo(); // creating a thread1
//
//		Thread obj1=new Thread(d1);
//
//		
//
//		obj1.setName("t1");
//
//		obj1.start(); // starting a thread 1
//
//		
//
//		
//
//		Demo d2 = new Demo(); // creating a thread2
//
//		Thread obj2=new Thread(d2);
//
//		
//
//		
//
//		obj2.setName("t2");
//
//		obj2.start(); // starting a thread 2
//
// 
//
//	}
//
// 
//
//	void printTable(int num) {
//
//		for (int i = 1; i <= 10; i++) {
//
//			System.out.println(num + " * " + i + " = " + (num * i) + " - " +Thread.currentThread().getName());
//
// 
//
//		}
//
//	}
//
//	
//
//	
//
//	void counting()
//
//	{
//
//		for(int i=1;i<=10;i++)
//
//		{
//
//			try {
//
//				Thread.sleep(2000);
//
//			} catch (InterruptedException e) {
//
//				
//
//			}
//
//			System.out.println(i+"- "+Thread.currentThread().getName());
//
//	}}
//
// 
//
//	public void run() // running the thread
//
//	{
//
//		if(Thread.currentThread().getName().equals("t1"))
//
//			printTable(3);
//
//	   
//
//		else if (Thread.currentThread().getName().equalsIgnoreCase("t2"))
//
//			counting();
//
//		
//
//		
//
//	}
//
// 
//
//}



// Example



//public static void main(String[] args) {
//
//	 
//
//	Demo d1 = new Demo(); // creating a thread1
//
//	Thread obj1=new Thread(d1);
//
//	obj1.setName("t1");
//
//
//
//	
//
//	
//
//	Demo d2 = new Demo(); // creating a thread2
//
//	Thread obj2=new Thread(d2);
//
//	obj2.setName("t2");
//
//	
//
//	
//
//	
//
//	obj1.start(); // starting a thread 1
//
//	try {
//
//		obj1.join();
//
//	} catch (InterruptedException e) {
//
//		System.out.println(e);
//
//	}
//
//	obj2.start(); // starting a thread 2
//
//
//
//}}




// Example

//Asynchronized 



//public class Demo extends Thread {
//
// 
//
//	static int counter = 0;
//
// 
//
//	public static void main(String[] args) throws InterruptedException {
//
// 
//
//		Demo obj1= new Demo(); // creating a thread1
//
//		obj1.setName("t1");
//
// 
//
//		Demo obj2= new Demo(); // creating a thread2
//
//		obj2.setName("t2");
//
//     
//
//		obj1.start(); // starting a thread 1
//
//		obj1.join();
//
//		obj2.start(); // starting a thread 2
//
//         
//
//		obj2.join();
//
//		//obj3.start();
//
//	}
//
// 
//
//	synchronized void inc() {
//
//		counter++;
//
//	}
//
// 
//
//	synchronized int get() {
//
//		return counter;
//
//	}
//
// 
//
//	public void run() // running the thread
//
//	{
//
//		if (currentThread().getName().equalsIgnoreCase("t1"))
//
//		{
//
//			for(int i=1;i<=10;i++) {
//
//				inc();
//
//			System.out.println("value is incremented"+i);	
//
//			}
//
//		}
//
//		else if (currentThread().getName().equalsIgnoreCase("t2"))
//
//		{
//
//			for(int i=1;i<=100;i++)
//
//		
//
//			System.out.println(get());
//
//	}}
//
// 
//
//}
//



// Example





public class Demo extends Thread {

 

	static int counter = 0;

 

	public static void main(String[] args) throws InterruptedException {

 

		Demo obj1= new Demo(); // creating a thread1

		obj1.setName("t1");

 

		Demo obj2= new Demo(); // creating a thread2

		obj2.setName("t2");

     

		obj1.start(); // starting a thread 1

		obj1.join();

		obj2.start(); // starting a thread 2

         

		obj2.join();

		//obj3.start();

	}

 

	synchronized void inc() {

		counter++;

	}

 

	synchronized int get() {

		return counter;

	}

 

	public void run() // running the thread

	{

		if (currentThread().getName().equalsIgnoreCase("t1"))

		{

			for(int i=1;i<=10;i++) {

				inc();

			System.out.println("value is incremented"+i);	

			}

		}

		else if (currentThread().getName().equalsIgnoreCase("t2"))

		{

			for(int i=1;i<=100;i++)

		

			System.out.println(get());

	}}

 

}



















