package patternquestions;

import java.util.*;

public class SortStrategyDemo {
    public static void main(String[] args) {

        int[] arr = {5, 2, 9, 1, 3};

        SortContext context = new SortContext();

        context.setStrategy(a -> {   // Bubble Sort (lambda)
            for (int i = 0; i < a.length - 1; i++)
                for (int j = 0; j < a.length - i - 1; j++)
                    if (a[j] > a[j + 1]) {
                        int t = a[j]; a[j] = a[j + 1]; a[j + 1] = t;
                    }
            System.out.println("Bubble: " + Arrays.toString(a));
        });
        context.sort(arr);

        arr = new int[]{5, 2, 9, 1, 3};

        context.setStrategy(a -> {   // Quick Sort (shortcut)
            Arrays.sort(a);
            System.out.println("Quick: " + Arrays.toString(a));
        });
        context.sort(arr);
    }
}


interface SortStrategy {
    void sort(int[] arr);
}


class SortContext {
    SortStrategy strategy;

    void setStrategy(SortStrategy strategy) {
        this.strategy = strategy;
    }

    void sort(int[] arr) {
        strategy.sort(arr);
    }
}