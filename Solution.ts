
function minimumLength(input: string): number {
    let left: number = 0;
    let right: number = input.length - 1;

    while (left < right && input.charAt(left) === input.charAt(right)) {

        let letterToRemove: string = input.charAt(left);
        while (left <= right && input.charAt(left) === letterToRemove) {
            ++left;
        }
        while (left < right && input.charAt(right) === letterToRemove) {
            --right;
        }
    }

    return right - left + 1;
};
