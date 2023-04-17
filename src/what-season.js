const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(a) {

  if (arguments.length == 0)  return 'Unable to determine the time of year!'
  if (!(a instanceof Date))  throw new Error("Invalid date!"); 
  if (a.hasOwnProperty('toString')) throw new Error("Invalid date!"); 
  


 
 let w = [11,0,1]
 let s = [2,3,4]
 let su = [5,6,7]
 let au = [8,9,10]

 // if (a instanceof Date) {console.log("ok")} 
 // else return 'Invalid date!'

 

 if (typeof a != 'object') return 'Unable to determine the time of year!'
 
 //if (Object.keys(a).length>0) return 'Invalid date!'

 if(isNaN(a.getTime())) throw new Error("Invalid date!"); //return 'Invalid date!'



 let ourM = a.getMonth()
 //console.log("ourM", ourM)

 if (w.includes(ourM)) return 'winter'
 if (s.includes(ourM)) return 'spring'
 if (su.includes(ourM)) return 'summer'
 if (au.includes(ourM)) return 'autumn'

return 'Unable to determine the time of year!'
  
}

module.exports = {
  getSeason
};
