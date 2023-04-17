const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let out = ''
  let add = ''
  str = String(str)
  let repeatTimes = options.repeatTimes ? options.repeatTimes : 0
  let separator = options.separator ? options.separator : '+'
  let addition = options.addition ? String(options.addition) : '' 
  let additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 0
  let additionSeparator = options.additionSeparator ? options.additionSeparator : '|'


  // console.log("repeatTimes = ", repeatTimes)
  // console.log("separator =", separator)
  // console.log("options.addition = ", options.addition)
  // console.log("addition = ", addition)
  // console.log("additionRepeatTimes = ", additionRepeatTimes)
  // console.log("additionSeparator = ", additionSeparator)

  //if (additionRepeatTimes == 0) {add = addition}
  for (let i = 0; i < additionRepeatTimes; i++) {
    if (i == additionRepeatTimes-1) additionSeparator = ''
    add += addition+additionSeparator;
    // console.log(i)
  }

  if (additionRepeatTimes == 0) {add = addition}
  


  str += add
  // console.log("str = ", str)


  for (let i = 0; i < repeatTimes; i++) {
    if (i == repeatTimes-1) separator = ''
    out += str+separator;
    
  }
  
  if (repeatTimes == 0) out  = str
  
  return out
}



module.exports = {
  repeater
};
