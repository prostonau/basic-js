const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let out = []
  out = n.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b))
  if (out >= 10) return Math.min(...n.toString().split(''))
  else return out
}

module.exports = {
  getSumOfDigits
};
