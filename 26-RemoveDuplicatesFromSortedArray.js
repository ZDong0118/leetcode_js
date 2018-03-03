var removeDuplicates = function(nums) {
    var index = 0;
    while(index < nums.length) {
        if(nums.indexOf(nums[index]) !== nums.lastIndexOf(nums[index])) {
            nums.splice(nums.lastIndexOf(nums[index]), 1);
        } else {
            index++;
        }
    }
    return nums.length;
}
removeDuplicates([1,1,1,1]);
