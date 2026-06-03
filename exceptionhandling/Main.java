package exceptionhandling;
//import java.io.*;
//
//class Main {
//    public static void main(String[] args) {
//        try {
//          
//            // This will throw an ArithmeticException
//            int res = 10 / 0;
//        }
//        // Here we are Handling the exception
//        catch (ArithmeticException e) {
//            System.out.println("Exception caught: " + e);
//        }
//
//        // This line will executes weather an exception
//        // occurs or not
//        System.out.println("I will always execute");
//    }
//}





//Example 2


import java.util.InputMismatchException;

import java.util.Scanner;



public class Main {

    public static void main(String[] args) {



        for(int i=1;i<=10;i++)

        {

            try {



                if(i==5)

                {

                    Scanner s=new Scanner(System.in);

                    //	int a=s.nextInt(); //

                    i=i/0; // infinity   // risk code

                }



            }

            catch(ArithmeticException e)

            {

                System.out.println(e.getMessage());

            }

            catch(InputMismatchException e)

            {

                System.out.println(e.getMessage());

            }

            System.out.println(i);

        }







    }

}
