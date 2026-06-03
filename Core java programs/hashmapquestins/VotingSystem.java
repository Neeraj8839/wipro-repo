package hashmapquestins;

import java.util.*;

public class VotingSystem {
    public static void main(String[] args) {

        HashMap<String, Integer> votes = new HashMap<>();

        // Static votes
        String[] inputVotes = {"A", "B", "A", "C", "A", "B"};

        // Count votes
        for (String name : inputVotes) {
            votes.put(name, votes.getOrDefault(name, 0) + 1);
        }

        // Print votes
        System.out.println("Vote Count:");
        for (String key : votes.keySet()) {
            System.out.println(key + " -> " + votes.get(key));
        }

        // Find winner
        String winner = "";
        int maxVotes = 0;

        for (String key : votes.keySet()) {
            if (votes.get(key) > maxVotes) {
                maxVotes = votes.get(key);
                winner = key;
            }
        }

        System.out.println("Winner: " + winner + " with " + maxVotes + " votes");
    }
}