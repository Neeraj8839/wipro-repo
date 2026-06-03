package patternquestions;

public class NavigationDemo {
	
	
	public static void main(String[] args) {

        Navigator navigator = new Navigator();

        navigator.setStrategy(new FastestRoute());
        navigator.navigate("Delhi", "Lucknow");

        navigator.setStrategy(new ShortestRoute());
        navigator.navigate("Delhi", "Lucknow");

        navigator.setStrategy(new AvoidTollsRoute());
        navigator.navigate("Delhi", "Lucknow");
    }
}

   
    interface RouteStrategy {
        void buildRoute(String source, String destination);
    }

   
     class FastestRoute implements RouteStrategy {
        public void buildRoute(String source, String destination) {
            System.out.println("Fastest route from " + source + " to " + destination);
        }
    }

     class ShortestRoute implements RouteStrategy {
        public void buildRoute(String source, String destination) {
            System.out.println("Shortest route from " + source + " to " + destination);
        }
    }

     class AvoidTollsRoute implements RouteStrategy {
        public void buildRoute(String source, String destination) {
            System.out.println("Route avoiding tolls from " + source + " to " + destination);
        }
    }

    
     class Navigator {
        private RouteStrategy strategy;

        public void setStrategy(RouteStrategy strategy) {
            this.strategy = strategy;
        }

        public void navigate(String source, String destination) {
            strategy.buildRoute(source, destination);
        }
    

  
    public static void main(String[] args) {

        Navigator navigator = new Navigator();

        navigator.setStrategy(new FastestRoute());
        navigator.navigate("Delhi", "Lucknow");

        navigator.setStrategy(new ShortestRoute());
        navigator.navigate("Delhi", "Lucknow");

        navigator.setStrategy(new AvoidTollsRoute());
        navigator.navigate("Delhi", "Lucknow");
    }
}