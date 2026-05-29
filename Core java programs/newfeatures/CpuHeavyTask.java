package newfeatures;

public class CpuHeavyTask {

    public static void main(String[] args) throws Exception {

        Thread t = new Thread(() -> {
            System.out.println("CPU Task Started");

            long sum = 0;

            // Heavy computation
            for (long i = 1; i <= 1_000_000_00; i++) {
                sum += i;
            }

            System.out.println("Sum = " + sum);
            System.out.println("CPU Task Completed");
        });

        t.start();
        t.join(); // wait for completion

        System.out.println("Main Thread Finished");
    }
}