package newfeatures;

import java.util.concurrent.ExecutorService;

import java.util.concurrent.Executors;

 

public class Test2 {

 

	public static void main(String[] args) {

	

		Runnable task= () -> System.out.println("hello thread is working!");

		

		Thread vt=Thread.ofVirtual().start(task);

		for(int i=1;i<=10;i++)

		{
			int finalI = i;

			Thread.ofVirtual().start(

					() -> System.out.println("New virtual thread is created!"+ finalI)

					);

		}

		ExecutorService service=Executors.newVirtualThreadPerTaskExecutor();

		

		//service.submit

	}

 

}




