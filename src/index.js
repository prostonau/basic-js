
// assert.equal(dateSample(3), false);
// assert.equal(dateSample(3.312312), false);
// assert.equal(dateSample(false), false);
// assert.equal(dateSample(null), false);
// assert.equal(dateSample(undefined), false);
// assert.equal(dateSample([3]), false);
// assert.equal(dateSample(['3']), false);
// assert.equal(dateSample({ '3.14': '3dec' }), false);
 


// let b = [ '--discrard-next', true, true, 1 ]

//  console.log(b)

function deleteDigit(n) {
   console.log(n.toString().split(''))
    let max = 0

    for (let i = 0; i < n.toString().length; i++) {
      console.log(parseInt(n.toString().replace(n.toString()[i],'')))
      if ( max < parseInt(n.toString().replace(n.toString()[i],'')))
      max = parseInt(n.toString().replace(n.toString()[i],''))
    }

    console.log(max)

    return max 

}

console.log(deleteDigit(342))




