const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {

    let outM = []
    let output = 0
      
      for (let y = 0; y < matrix.length; y++) {
        //console.log("matrix[y] = ", matrix[y])
        outM.push( [] );
        for (let x = 0; x < matrix[y].length; x++) {
          //console.log(matrix[y][x])
          let count = 0 
          if (matrix[y][x] == true)  {count = 0; outM[x].push(1); continue;}  
    
          if(x>0) {if (matrix[y][x-1] == true) ++count;}
          if(x <= matrix[y].length) {if (matrix[y][x+1] == true) ++count;}
          if(y>0 && x>0) {if (matrix[y-1][x-1] == true) ++count;}
          if(y>0 && x+1 <= matrix[y].length ) {if (matrix[y-1][x+1] == true) ++count;}
          if(x>0 && matrix[y+1]) {if (matrix[y+1][x-1] == true) ++count;}
          if(x <= matrix[y].length && matrix[y+1]) {if (matrix[y+1][x+1] == true) ++count;}
          if(matrix[y-1]) {if (matrix[y-1][x] == true) ++count;}
          if(matrix[y+1]) {if (matrix[y+1][x] == true) ++count;}
          outM[y].push(count)     
        }
      }
    
      return outM
    
    }

module.exports = {
  minesweeper
};
