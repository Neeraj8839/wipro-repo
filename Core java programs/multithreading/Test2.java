
// LOCAL THREAD



package multithreading;




//public class Test2 {
//
//	static ThreadLocal<Integer> local=new ThreadLocal<Integer>();
//
// 
//
//	    public static void main(String[] args)
//
//	    {
//
// 
//
//	        Thread obj= new Thread( () ->   
//
//	        {
//
//	                    local.set(2);
//
//	         System.out.println(local.get());          
//
//	        }		);
//
//	    	
//
//	        obj.start();
//
//	    	
//
//	        
//
// 
//
//	        Thread obj2= new Thread( () ->   
//
//	        {
//
//	                    local.set(22);
//
//	         System.out.println(local.get());          
//
//	        }		);
//
//	    	
//
//	        obj2.start();
//
//	    	
//
//	    }
//
//	}


//    VOLATILE





public class Test2 {

	

	

	static volatile int x=0;

 

	    public static void main(String[] args)

	    {

 

	        Thread obj= new Thread( () ->   

	        {

	                    x=8;

	         System.out.println(x);          

	        }		);

	    	

	        obj.start();

	    	

	        

 

	        Thread obj2= new Thread( () ->   

	        {

	              

	         System.out.println(x);          

	        }		);

	    	

	        obj2.start();

	    	

	    }

	}






