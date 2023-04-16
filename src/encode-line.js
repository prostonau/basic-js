const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {

  let count = 0
  let output = []
  let check 
  let i=0;
  str.split('').map( e => {
    ++i;
  
    if (count == 0) check = e
  
     
  
    if (check == e) { ++count;}
    else {
      if (count==1) {output.push(check)} else {output.push(count+check)}
      count = 1;
      check = e; 
    }
  
    //console.log("e", e, "check", check, "count",count)
  
    if (str.split('').length == i) { if (count==1) {output.push(check)} else {output.push(count+check)}; }
  
  })
  
  let o2 = []
  
  output.map(e=> {
    if(e != 1) o2.push(e)
  })
  
    return o2.join('')
  }

module.exports = {
  encodeLine
};
