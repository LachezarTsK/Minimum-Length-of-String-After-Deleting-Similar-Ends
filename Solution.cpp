
#include <string>
#include <variant>
using namespace std;

class Solution {

public:
    int minimumLength(const string& input) const {
        size_t left = 0;
        size_t right = input.length() - 1;

        while (left < right && input[left] == input[right]) {

            char letterToRemove = input[left];
            while (left <= right && input[left] == letterToRemove) {
                ++left;
            }
            while (left < right && input[right] == letterToRemove) {
                --right;
            }
        }

        return (right - left != variant_npos) ? right - left + 1 : 0;
    }
};
