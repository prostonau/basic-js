
// assert.equal(dateSample(3), false);
// assert.equal(dateSample(3.312312), false);
// assert.equal(dateSample(false), false);
// assert.equal(dateSample(null), false);
// assert.equal(dateSample(undefined), false);
// assert.equal(dateSample([3]), false);
// assert.equal(dateSample(['3']), false);
// assert.equal(dateSample({ '3.14': '3dec' }), false);
 


let b = [1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]

 console.log(b)

 function dateSample(a) {
  if (!Array.isArray(a)) return "'arr' parameter must be an instance of the Array!"

 
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

  return  output.filter(function(val){ return val!==undefined; });

  
  
  }


 
console.log(dateSample(b))