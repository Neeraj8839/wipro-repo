package com.wipro.springExample;

public class App {

    public static void main(String[] args) {

        // Using Manager

        Delegate d1 =
                new Delegate(new Manager());

        d1.notifyUser();

        // Using TeamLead

        Delegate d2 =
                new Delegate(new TeamLead());

        d2.notifyUser();
    }
}