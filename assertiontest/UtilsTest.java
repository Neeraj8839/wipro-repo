package assertiontest;

import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

class UtilsTest {

    Utils obj;

    @BeforeEach
    void setup() {
        obj = new Utils();
    }

    @Test
    void testPrime() {
        assertTrue(obj.isPrime(7));
        assertFalse(obj.isPrime(4));
    }

    @Test
    void testPalindrome() {
        assertTrue(obj.isPalindrome("madam"));
        assertFalse(obj.isPalindrome("hello"));
    }

    @Test
    void testEvenOdd() {
        assertTrue(obj.isEven(10));
        assertFalse(obj.isEven(7));
    }

    @Test
    void testVowels() {
        assertEquals(3, obj.countVowels("nation"));
    }

    @Test
    void testReverse() {
        assertEquals("cba", obj.reverse("abc"));
    }

    @Test
    void testMax() {
        assertEquals(9, obj.max(new int[]{1,5,9,3}));
    }
}
