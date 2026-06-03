package patternquestions;




public class Adapter2  {

    public static void main(String[] args) {

 

        // Existing feature

        Order zomato = new Zomato();

        zomato.placeOrder("Pizza");

 

        // New feature via adapter

        TableBookingSystem bookingSystem = new TableBookingSystem();

        Order adapter = new BookingAdapter(bookingSystem);

 

        adapter.placeOrder("Sakshi");

    }

}

 

interface Order{

	void placeOrder(String x);

}

 

class Zomato implements Order    //existing feature

 {

    public void placeOrder(String item) {

        System.out.println("Order placed: " + item);

    }

}

 

 

 

class TableBookingSystem   //new functionality

{

    public void bookTable(String name) {

        System.out.println("Table booked for: " + name);

    }

 

}

 

 

 

class BookingAdapter implements Order {

 

    private TableBookingSystem booking;

 

    BookingAdapter(TableBookingSystem booking) {

        this.booking = booking;

    }

 

 

	@Override

	public void placeOrder(String x) {

		 booking.bookTable(x);

		

	}

}




