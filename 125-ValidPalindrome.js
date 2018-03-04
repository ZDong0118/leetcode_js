// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// For example,
// "A man, a plan, a canal: Panama" is a palindrome.
// "race a car" is not a palindrome.

// Note:
// Have you consider that the string might be empty? This is a good question to ask during an interview.

// For the purpose of this problem, we define empty string as valid palindrome.

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s.length === 0) {return true}
    s = s.replace(/[^a-zA-Z0-9]/g,'');
    s = s.toLowerCase();
    console.log(s);
    var left = 0;
    var right = s.length - 1;
    while(left < right) {
        if(s[left] === s[right]) {
            left++;
            right--;
        } else {
            return false;
        }
    }
    return true;
};