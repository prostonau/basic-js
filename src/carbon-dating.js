const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(a) {  
  let numbers = [0,1,2,3,4,5,6,7,8,9]

  if (typeof a != 'string') return false
  if (!a) return false  
  if(parseFloat(a) == NaN) return false
  if(parseFloat(a)<=0 || parseFloat(a)>15) return false
  if (a.length == 0) return false
  if (!numbers.includes(parseInt(a[0]))) return false



  return    Math.ceil(Math.log(15/a)
            /
            (0.693/5730)
            )
}


module.exports = {
  dateSample
};
