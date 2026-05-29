package assertiontest;

class Utils {

    // Prime
    public boolean isPrime(int n) {
        if (n <= 1) return false;
        for (int i = 2; i <= n/2; i++) {
            if (n % i == 0) return false;
        }
        return true;
    }

    // Palindrome
    public boolean isPalindrome(String str) {
        String rev = new StringBuilder(str).reverse().toString();
        return str.equals(rev);
    }

    // Even/Odd
    public boolean isEven(int n) {
        return n % 2 == 0;
    }

    // Count Vowels
    public int countVowels(String str) {
        int count = 0;
        for(char c : str.toLowerCase().toCharArray()) {
            if("aeiou".contains(String.valueOf(c))) count++;
        }
        return count;
    }

    // Reverse String
    public String reverse(String str) {
        return new StringBuilder(str).reverse().toString();
    }

    // Max in Array
    public int max(int[] arr) {
        int max = arr[0];
        for(int n : arr) {
            if(n > max) max = n;
        }
        return max;
    }
}
