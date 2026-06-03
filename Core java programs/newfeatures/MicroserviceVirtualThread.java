package newfeatures;

public class MicroserviceVirtualThread {
    public static void main(String[] args) throws Exception {

        Thread vt = Thread.startVirtualThread(() -> {
            try {
                System.out.println("Calling Microservice...");

                Thread.sleep(1500);

                System.out.println("Microservice Response: SUCCESS");

            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });

        vt.join();
        System.out.println("Microservice Task Finished");
    }
}