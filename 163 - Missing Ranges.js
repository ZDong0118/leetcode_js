/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
    var result = [];
    //Assume there is a range before lower, so it will cover the lower to first element
    var prev = lower - 1;
    var curr = 0;
    for (var i = 0; i<=nums.length; i++) {
        //Same as here, assuming there is a range after upper, it will cover the last element to upper
        curr = i == nums.length ? upper + 1 : nums[i];
        if(curr-prev > 1) {
            result.push(getRanges(prev + 1, curr - 1));
        }
        prev = curr;
    }
    return result;
};

function getRanges(begin, end) {
    return begin == end ? begin.toString() : begin + "->" + end;
}