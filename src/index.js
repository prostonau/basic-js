

 let b =  [
  '   William Alston ',
  ' Paul Benacerraf',
  '  Ross Cameron',
  '       Gilles Deleuze',
  '  Arda Denkel ',
  '  Michael Devitt',
  '  Kit Fine',
  ' Nelson Goodman',
  'David Kolb',
  '   Saul Kripke',
  '  Trenton Merricks',
  '  Jay Rosenberg',
]
  ///  ADGJKMNPRSTW

 console.log(b)

function createDreamTeam(d) {

  let newArray = []
  d.map(e => {
    if ((typeof(e) == 'string') && e) newArray.push(e)
  })

  newArray = newArray.map(e => e.replaceAll(/\s/g,'').substring(0, 1)).sort((a,b) => a.localeCompare(b))
  console.log(" newArray",  newArray)

  return newArray.join('').toUpperCase()     
  
}

 
console.log(createDreamTeam(b))