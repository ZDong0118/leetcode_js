/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort((a,b) => a - b);
    
    var results = [];

    for(var i = 0; i<nums.length; i++) {
        //Duplicate number will have duplicate result, skip
        if (i && nums[i] === nums[i - 1]) continue 

        let rest = 0 - nums[i];
        
        let start = i+1;
        let end = nums.length-1;

        while(start < end) {
            sum = nums[start] + nums[end];
            if(sum > rest) {
                end--;
            } else if (sum < rest) {
                start++;
            } else {
                let result = [nums[i], nums[start], nums[end]];
                results.push(result);

                //Remove duplicate with sort array
                while(nums[start] === nums[start+1]) {
                    start++;
                }
                start++;

                //Same as above
                while(nums[end] === nums[end-1]) {
                    end--;
                }
                end--;
            }
        }
    }

    return results;
};