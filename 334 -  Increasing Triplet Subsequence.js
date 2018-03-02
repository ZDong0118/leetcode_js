/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    var p = Infinity;
    var q = Infinity;
    for(var i = 0; i<nums.length; i++) {
        if(nums[i] <= p) {
            p = nums[i];
        } else if(nums[i] <= q) {
            q = nums[i];
        } else if(nums[i] > q) {
            return true;
        } 
    }
    return false;
}; 