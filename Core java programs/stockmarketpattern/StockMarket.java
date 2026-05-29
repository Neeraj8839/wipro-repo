package stockmarketpattern;


import java.util.*;

class StockMarket {
     List<Subscriber> investors = new ArrayList<>();
     String stockName;
     double price;

   
    public void addInvestor(Subscriber s) {
        investors.add(s);
    }

    
//    public void removeInvestor(Subscriber s) {
//        investors.remove(s);
//    }

    
    public void notifyInvestors() {
        for (Subscriber s : investors) {
            s.update(stockName, price);
        }
    }

   
    public void setStock(String stockName, double price) {
        this.stockName = stockName;
        this.price = price;
        notifyInvestors();
    }
}