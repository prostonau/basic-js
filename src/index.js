

  
 
function repeater(str, options) {
  let out = ''
  let add = ''
  str = String(str)
  let repeatTimes = options.repeatTimes ? options.repeatTimes : 0
  let separator = options.separator ? options.separator : '+'
  let addition = options.addition ? String(options.addition) : '' 
  let additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 0
  let additionSeparator = options.additionSeparator ? options.additionSeparator : '|'


  console.log("repeatTimes = ", repeatTimes)
  console.log("separator =", separator)
  console.log("options.addition = ", options.addition)
  console.log("addition = ", addition)
  console.log("additionRepeatTimes = ", additionRepeatTimes)
  console.log("additionSeparator = ", additionSeparator)

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

console.log(
  repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' })
)




