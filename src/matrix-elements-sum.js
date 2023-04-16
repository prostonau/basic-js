const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let outindex = []
  let output = 0
    
    for (let i = 0; i < matrix.length; i++) {
      //console.log("matrix[i] = ", matrix[i])
      for (let j = 0; j < matrix[i].length; j++) {
        //console.log(matrix[i][j])
        if (!outindex.includes(j)) output += matrix[i][j]
        if (matrix[i][j] == 0) outindex.push(j)    
      }
    }
  
    return output
  
  }

module.exports = {
  getMatrixElementsSum
};
