package stringpractice;


import java.util.*;

public class StringPrograms {

   
    public static String reverse(String str) {
        return new StringBuilder(str).reverse().toString();
    }

   
    public static int countVowels(String str) {
        int count = 0;
        for(char c : str.toLowerCase().toCharArray()) {
            if("aeiou".indexOf(c) != -1) count++;
        }
        return count;
    }

   
    public static int countConsonants(String str) {
        int count = 0;
        for(char c : str.toLowerCase().toCharArray()) {
            if(Character.isLetter(c) && "aeiou".indexOf(c) == -1) count++;
        }
        return count;
    }

    public static int countChar(String str, char ch) {
        int count = 0;
      
        for(char c : str.toCharArray()) {
            if(c == ch) count++;
        }
        return count;
    }

   
    public static String toUpper(String str) {
        return str.toUpperCase();
    }

   
    public static int length(String str) {
        return str.length();
    }

   
    public static boolean isPalindrome(String str) {
        String rev = reverse(str);
        return str.equalsIgnoreCase(rev);
    }

    
    public static String replaceConsonants(String str) {
        String result = "";
        for(char c : str.toCharArray()) {
            if(Character.isLetter(c) && "aeiouAEIOU".indexOf(c) == -1) {
                result += '0';
            } else {
                result += c;
            }
        }
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter string: ");
        String str = sc.nextLine();

        System.out.println("Reverse: " + reverse(str));
        System.out.println("Vowels: " + countVowels(str));
        System.out.println("Consonants: " + countConsonants(str));

        System.out.print("Enter character to count: ");
        char ch = sc.next().charAt(0);
        System.out.println("Frequency: " + countChar(str, ch));

        System.out.println("Uppercase: " + toUpper(str));
        System.out.println("Length: " + length(str));

        if(isPalindrome(str))
            System.out.println("Palindrome");
        else
            System.out.println("Not Palindrome");

        System.out.println("Replace consonants: " + replaceConsonants(str));
    }
}
