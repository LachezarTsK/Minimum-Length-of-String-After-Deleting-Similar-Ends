
using System;

public class Solution
{
    public int MinimumLength(string input)
    {
        int left = 0;
        int right = input.Length - 1;

        while (left < right && input[left] == input[right])
        {
            char letterToRemove = input[left];
            while (left <= right && input[left] == letterToRemove)
            {
                ++left;
            }
            while (left < right && input[right] == letterToRemove)
            {
                --right;
            }
        }

        return right - left + 1;
    }
}
