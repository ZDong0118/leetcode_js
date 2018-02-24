// Given a string, find the length of the longest substring without repeating characters.

// Examples:

// Given "abcabcbb", the answer is "abc", which the length is 3.

// Given "bbbbb", the answer is "b", with the length of 1.

// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    //Early Bail
    if(s === null || s.length === 0){
        return 0;
    }

    var hash = {};
    var currentLength = 0;
    var longestLength = currentLength;
    var start = 0;

    for(var i = start; i < s.length; i++) {
        if(hash[s[i]] !== undefined && hash[s[i]] >= start) {
           start = hash[s[i]] + 1;
           currentLength = i - start;
        } 
        currentLength++;

        if(currentLength > longestLength) {
            longestLength = currentLength;
        }

        hash[s[i]] = i;
    }

    return longestLength;
};