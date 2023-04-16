const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {

  let sorted =  arr.filter(function(item) {
   return item !== -1
  }).sort((a,b) => a-b)
  
  output = []
 
  let i = 0
  arr.map (e=>{
   if (e == -1) output.push(-1)
   else{
     output.push(sorted[i])
     ++i
   }
  })
 
   return output
  
 }

module.exports = {
  sortByHeight
};
