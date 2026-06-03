package newfeatures;

public class ParallelComputation {

    public static void main(String[] args) throws Exception {

        Runnable task = () -> {
            System.out.println(Thread.currentThread().getName() + " started");

            long result = 1;

            // Simulating complex calculation
            for (int i = 1; i <= 20; i++) {
                result *= i; // factorial
            }

            System.out.println(Thread.currentThread().getName() + " result = " + result);
        };

        Thread t1 = new Thread(task);
        Thread t2 = new Thread(task);
        Thread t3 = new Thread(task);

        t1.start();
        t2.start();
        t3.start();

        t1.join();
        t2.join();
        t3.join();

        System.out.println("All Threads Completed");
    }
}