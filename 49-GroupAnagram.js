/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    var results = [];
    var hash = {};

    for(var i = 0; i<strs.length; i++) {
        var item = strs[i].split('').sort().join('');
        if(!hash[item]) {
            hash[item] = [];
            hash[item].push(strs[i]);
        } else {
            hash[item].push(strs[i]);
        }
    }

    for(var key in hash) {
        results.push(hash[key]);
    }

    return results;
};