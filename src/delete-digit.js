const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  //console.log(n.toString().split(''))
   let max = 0

   for (let i = 0; i < n.toString().length; i++) {
     //console.log(parseInt(n.toString().replace(n.toString()[i],'')))
     let a = parseInt(n.toString().replace(n.toString()[i],''))
     if ( max < a) max = a
   }

   //console.log(max)

   return max 

}

module.exports = {
  deleteDigit
};
