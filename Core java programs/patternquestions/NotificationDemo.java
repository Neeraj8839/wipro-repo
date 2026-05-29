package patternquestions;

public class NotificationDemo {

	public static void main(String[] args) {
		
		Notification n1 = NotificationFactory.getNotification("Email");
		n1.send("Dear Members");
		
		Notification n2 = NotificationFactory.getNotification("SMS");
		n2.send("I'll call you later");
		
		Notification n3 = NotificationFactory.getNotification("Push");
		n3.send("Hello Neeraj");
		

	}

}

interface Notification {
	void send (String message);
}

class EmailNotification implements Notification {
	public void send (String message) {
		System.out.println("Email sent: " + message);
	}
}
class SMSNotification implements Notification {
	public void send (String message) {
		System.out.println("SMS sent: " + message);
	}
}

 class PushNotification implements Notification {
	public void send (String message) {
		System.out.println("Push sent: " + message);
	}
}


 class NotificationFactory {
	public static Notification getNotification(String type) {
		
		if (type.equalsIgnoreCase("Email"))
			return new EmailNotification();
		
		else if (type.equalsIgnoreCase("SMS"))
			return new SMSNotification();
		
		else if (type.equalsIgnoreCase("Push"))
			return new PushNotification();
		
		return null;
		
		
	}
}




