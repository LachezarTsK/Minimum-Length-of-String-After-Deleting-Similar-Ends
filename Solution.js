
/**
 * @param {string} input
 * @return {number}
 */
var minimumLength = function (input) {
    let left = 0;
    let right = input.length - 1;

    while (left < right && input.charAt(left) === input.charAt(right)) {

        let letterToRemove = input.charAt(left);
        while (left <= right && input.charAt(left) === letterToRemove) {
            ++left;
        }
        while (left < right && input.charAt(right) === letterToRemove) {
            --right;
        }
    }

    return right - left + 1;
};
