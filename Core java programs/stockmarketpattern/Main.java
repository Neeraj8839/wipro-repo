package stockmarketpattern;

public class Main {
    public static void main(String[] args) {

        StockMarket market = new StockMarket();

        Investor i1 = new Investor("Idea");
        Investor i2 = new Investor("Jio");

        market.addInvestor(i1);
        market.addInvestor(i2);

        market.setStock("Idea", 3500);
        System.out.println("----");

        market.setStock("Jio", 1500);
    }
}