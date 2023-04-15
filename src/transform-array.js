const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(a) {

  if (!Array.isArray(a)) throw new NotImplementedError("'arr' parameter must be an instance of the Array!"); 

  if (!a.includes('--discard-next') && !a.includes('--discard-prev') && !a.includes('--double-next') && !a.includes('--double-prev'))
  return a
 
 
  console.log("a", a,typeof a)
  
  let output = []
  let flag1 = false
  let flag2 = false
  let flag3 = false
  let flag4 = false

  let i = 0
  for (const e of a) {
  
    console.log(e);

    if (flag1 == true) 
    {
      flag1 = false
      ++i; 
      continue
    } 
    else if (flag3 == true)
    {
      output.push(e)
      output.push(e)
      flag3 = false
    } 
    else {
      if (e == '--discard-next') flag1 = true
      if (e == '--discard-prev' && output.length > 0 && a[i-2] != '--discard-next') {  console.log('tut1',a[i-2]);output.pop(); ++i; continue}
      if (e == '--double-next') flag3 = true
      if (e == '--double-prev' && output.length > 0 && a[i-2] != '--discard-next') {
                                                                console.log('tut2')
                                                                output.push(output[output.length-1]) 
                                                                }
      if (typeof e != 'string')  output.push(e)
    }


   console.log("flag3", flag3) 
   console.log("output", output)
   ++i; 
  }

  console.log("a", a,typeof a)

  return  output.filter(function(val){ return val!==undefined; });

  
  

}

module.exports = {
  transform
};
