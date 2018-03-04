/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var left = 0;
    var right = numbers.length - 1;

    while(left < right) {
        var sum = numbers[left] + numbers[right];
        if(sum > target) {
            right--;
        } else if (sum < target) {
            left++;
        } else {
            return [left+1, right+1];
        }
    }
    
    return false;
};