package patternquestions;




public class BuilderDemo2 {

 

	public static void main(String[] args) {

		Pizza order1 = new Pizza.Builder()

		        .setSize("Large")

		        .addCheese()

		        .build();

 

		order1.show();

		

		Pizza order2 = new Pizza.Builder()

		        .setSize("Large")

		        .addCheese()

		        .addOlives()

		        .build();

 

		order2.show();

		

		

		Pizza order3= new Pizza.Builder()

		        .setSize("Large")

		        .build();

 

		order3.show();

		

	}

 

	

}

 

 

class Pizza {

    private String size;

    private boolean cheese;

    private boolean olives;

 

    private Pizza(Builder b) {

        this.size = b.size;

        this.cheese = b.cheese;

        this.olives = b.olives;

    }

 

    public void show() {

        System.out.println("Order details : "+size + " Pizza | Cheese: " + cheese + " | Olives: " + olives);

    }

 

    static class Builder {

        private String size;

        private boolean cheese;

        private boolean olives;

 

        public Builder setSize(String size) {

            this.size = size;

            return this;

        }

 

        public Builder addCheese() {

            this.cheese = true;

            return this;

        }

 

        public Builder addOlives() {

            this.olives = true;

            return this;

        }

 

        public Pizza build() {

            return new Pizza(this);

        }

    }

}




