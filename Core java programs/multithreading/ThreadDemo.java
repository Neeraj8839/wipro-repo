package multithreading;


class ReverseThread extends Thread {
 public void run() {
     for (int i = 10; i >= 1; i--) {
         System.out.println("Reverse Thread: " + i);
     }
 }
}


class NormalThread extends Thread {
 public void run() {
     for (int i = 1; i <= 10; i++) {
         System.out.println("Normal Thread: " + i);
     }
 }
}


public class ThreadDemo {
 public static void main(String[] args) {

     ReverseThread t1 = new ReverseThread();
     NormalThread t2 = new NormalThread();

     t1.start(); 
     t2.start(); 
 }
}