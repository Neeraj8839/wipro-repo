package patternquestions;

import java.util.*;

public class WeatherDemo {
	
    public static void main(String[] args) {

        Weather w = new Weather();

        w.add(new Mobile());
        w.add(new Web());
        w.add(new LED());

        w.setTemp(25);
        w.setTemp(30);
    }
}


    interface Observer {
        void update(int temp);
    }

     class Weather {
        List<Observer> list = new ArrayList<>();
        int temp;

        void add(Observer o) { list.add(o); }

        void setTemp(int t) {
            temp = t;
            for (Observer o : list)
                o.update(temp);
        }
    }

     class Mobile implements Observer {
        public void update(int t) {
            System.out.println("Mobile: " + t);
        }
    }

     class Web implements Observer {
        public void update(int t) {
            System.out.println("Web: " + t);
        }
    }

     class LED implements Observer {
        public void update(int t) {
            System.out.println("LED: " + t);
        }
    

    public static void main(String[] args) {

        Weather w = new Weather();

        w.add(new Mobile());
        w.add(new Web());
        w.add(new LED());

        w.setTemp(25);
        w.setTemp(30);
    }
}