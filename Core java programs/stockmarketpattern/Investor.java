package stockmarketpattern;

class Investor implements Subscriber {
    private String name;

    public Investor(String name) {
        this.name = name;
    }

    
    public void update(String stockName, double price) {
        System.out.println(name + " notified: " + stockName + " price is now " + price);
    }
}