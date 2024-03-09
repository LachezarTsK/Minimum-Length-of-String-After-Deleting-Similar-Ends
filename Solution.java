
public class Solution {

    public int minimumLength(String input) {
        int left = 0;
        int right = input.length() - 1;

        while (left < right && input.charAt(left) == input.charAt(right)) {

            char letterToRemove = input.charAt(left);
            while (left <= right && input.charAt(left) == letterToRemove) {
                ++left;
            }
            while (left < right && input.charAt(right) == letterToRemove) {
                --right;
            }
        }

        return right - left + 1;
    }
}
