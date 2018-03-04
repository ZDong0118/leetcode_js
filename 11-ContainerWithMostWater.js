/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if (height == null || height.length < 2) {
        return 0;
    }
    var mostContainer = 0;
    var left = 0;
    var right = height.length - 1;

    while (left < right) {
        var container = (right - left) * Math.min(height[left], height[right]);
        if(container > mostContainer) {
            mostContainer = container;
        }
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    console.log(mostContainer);
    return mostContainer;
};
maxArea([1,1,2,3,1,3,5,3,5]);