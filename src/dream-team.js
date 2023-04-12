const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(d) {

  if (!Array.isArray(d)) return false

  let newArray = []
  d.map(e => {
    if ((typeof(e) == 'string') && e) newArray.push(e)
  })

  newArray = newArray.map(e => e.replaceAll(/\s/g,'').substring(0, 1)).sort((a,b) => a.localeCompare(b))
  console.log(" newArray",  newArray)

  return newArray.join('').toUpperCase()     
  
}

module.exports = {
  createDreamTeam
};
