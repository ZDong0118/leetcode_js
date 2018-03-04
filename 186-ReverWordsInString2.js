/**
 * @param {character[]} str
 * @return {void} Do not return anything, modify str in-place instead.
 * 
 * Could you do it in-place without allocating extra space?
 */
var reverseWords = function(arr) {
    var left = 0;

    reverse(arr, 0, arr.length - 1);
    last = 0;

    var index = 0;

    for(var i = 0; i<=arr.length; i++) {
        // console.log(arr[i]);
        if(arr[i] === ' ' || i === arr.length) {
            reverse(arr, last, i - 1);
            last = i + 1;
        }
    }

    console.log(arr);

    function reverse(arr, left, right) {
        while(left < right) {
            var tmp = arr[left];
            arr[left] = arr[right];
            arr[right] = tmp;
            left++;
            right--;
        }
    }
    
};

reverseWords(["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]);