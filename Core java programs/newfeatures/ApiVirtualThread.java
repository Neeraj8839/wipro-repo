package newfeatures;

import java.net.URI;
import java.net.http.*;

public class ApiVirtualThread {
    public static void main(String[] args) throws Exception {

        HttpClient client = HttpClient.newHttpClient();

        Thread vt = Thread.startVirtualThread(() -> {
            try {
                System.out.println("API Call Started");

                HttpRequest request = HttpRequest.newBuilder()
                        .uri(URI.create("https://jsonplaceholder.typicode.com/posts/1"))
                        .GET()
                        .build();

                HttpResponse<String> response =
                        client.send(request, HttpResponse.BodyHandlers.ofString());

                System.out.println("API Response Length: " + response.body().length());

            } catch (Exception e) {
                e.printStackTrace();
            }
        });

        vt.join(); // wait so output definitely prints
        System.out.println("API Task Finished");
    }
}
