const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(arr) {
  let output = []
  arr.map(e=> {
    temp = []
    //console.log(e.split('.').reverse())
    e.split('.').reverse().map( c => {
      temp.push(c)
      output.push('.' + temp.join('.'))      
    })
  })
  //return output
  let outputUniq = Array.from(new Set(output));
  let obj = {}

  outputUniq.map( r => {
     obj[r] = output.filter(h=> h==r).length
  })

  return obj
}


module.exports = {
  getDNSStats
};
