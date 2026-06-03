package multithreading;




//
//public class Main {
//
// 
//
//	public static void main(String[] args) {
//
//		Shared s = new Shared();
//
// 
//
//		Thread o1 = new Thread( () -> {
//
//			try {
//
//				s.waitForSignal();
//
//			} catch (InterruptedException e) {
//
//				System.out.println(e);
//
//			}
//
//		});
//
// 
//
//		Thread o2 = new Thread( () -> {
//
//					try {
//
//						Thread.sleep(2000);
//
//						s.sendSignal();
//
//					} catch (Exception e) {
//
//						System.out.println(e);
//
//					}
//
//				}
//
// 
//
//		);
//
// 
//
//		o1.start();
//
//		o2.start();
//
// 
//
//	}
//
// 
//
//}
//
//class Shared {
//
//	boolean ready = false;
//
// 
//
//	synchronized void waitForSignal() throws InterruptedException {
//
//		if (!ready) {
//
//			System.out.println("Thread is being sent to waiting state");
//
//			wait();
//
// 
//
//			System.out.println("working??");
//
//		}
//
//		System.out.println("thread is resumed");
//
//	}
//
// 
//
//	synchronized void sendSignal() {
//
//		ready = true;
//
//		System.out.println("thread is being sent notification for resuming!");
//
//		notify(); // resume the code from line 54 when we sent the thread to waiting
//
//	}
//
//}

 

/*

 * wait() ----> keep thread in waiting state notify() ---> notify thread to come

 * back to running state notifyAll() ---> all thread

 * 

 */




// Notify All





public class Main {

 

	public static void main(String[] args) {

		Shared s = new Shared();

 

		Thread o1 = new Thread( () -> {

			try {

				s.waitForSignal();

			} catch (InterruptedException e) {

				System.out.println(e);

			}

		});

 

		Thread o2 = new Thread( () -> {

					try {

						Thread.sleep(2000);

						s.sendSignal();

					} catch (Exception e) {

						System.out.println(e);

					}

				}

 

		);

 

		o1.start();

		o2.start();

 

	}

 

}

class Shared {

	boolean ready = false;

 

	synchronized void waitForSignal() throws InterruptedException {

        while (!ready) {  // using while (BEST PRACTICE)

            System.out.println(Thread.currentThread().getName() + " is waiting...");

            wait();

        }

        System.out.println(Thread.currentThread().getName() + " resumed work!");

    }

    synchronized void sendSignal() {

        ready = true;

        System.out.println("Notifier thread sending signal to ALL threads!");

        notifyAll(); // wake up all waiting threads

    }

}








