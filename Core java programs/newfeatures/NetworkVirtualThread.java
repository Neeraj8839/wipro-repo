package newfeatures;

public class NetworkVirtualThread {
    public static void main(String[] args) throws Exception {

        Thread vt = Thread.startVirtualThread(() -> {
            try {
                System.out.println("Connecting to Server...");

                Thread.sleep(1000);

                System.out.println("Data Received: 1024 bytes");

            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });

        vt.join();
        System.out.println("Network Task Finished");
    }
}