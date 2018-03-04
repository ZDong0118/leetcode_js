/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k %= nums.length;
    console.log(k);
    if(k) {
        var temp = nums.slice(-k);
        nums.splice(-k);
    }
    Array.prototype.unshift.apply(nums, temp);
    console.log(nums);
};

rotate([1,2,3,4,5,6,7], 4);