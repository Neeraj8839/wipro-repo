package newfeatures;

public class DatabaseVirtualThread {
    public static void main(String[] args) throws Exception {

        Thread vt = Thread.startVirtualThread(() -> {
            try {
                System.out.println("DB Query Started");

                Thread.sleep(2000); // simulate delay

                System.out.println("Fetched Records: 5");

            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });

        vt.join();
        System.out.println("DB Task Finished");
    }
}