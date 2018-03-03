/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length === 0 || s.length === 1) {
        return s;
    }
    var longestLength = 0;
    var result = s.split('')[0];
    for(var i = 0; i < s.length; i++) {
        for(var j = s.length - 1; j > i + 1; j--) {
            var substr = s.substring(i, j + 1);
            console.log(substr);
            if(isPalindrome(substr)) {
                console.log('isPalindrome');
                if(substr.length > longestLength) {
                    longestLength = substr.length;
                    result = substr;
                }
            }
        }
    }
    return result;   
};

function isPalindrome(str) { 
    return str === str.split('').reverse().join('');
}

longestPalindrome('cbbd');
