//Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in place.

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {

    var n = matrix.length;
    var m = matrix[0].length;
    var mArr = [];
    var nArr = [];

    // Find all item equao to 0
    for(var i = 0; i<n; i++) {
        for(var j = 0; j<m; j++) {
            if(matrix[i][j] === 0) {
                mArr[i] = nArr[j] = true;
            } 
        }
    }

    // If the row or column is 0, matrix change to 0
    for(var i = 0; i<n; i++) {
        for(var j = 0; j<m; j++) {
            if(mArr[i] || nArr[j]) {
                matrix[i][j] = 0;
            } 
        }
    }
    
};
