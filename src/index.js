
// assert.equal(dateSample(3), false);
// assert.equal(dateSample(3.312312), false);
// assert.equal(dateSample(false), false);
// assert.equal(dateSample(null), false);
// assert.equal(dateSample(undefined), false);
// assert.equal(dateSample([3]), false);
// assert.equal(dateSample(['3']), false);
// assert.equal(dateSample({ '3.14': '3dec' }), false);
 


// let b = [ '--discrard-next', true, true, 1 ]


const chainMaker = {    
  getLength() {
    return this.arr.length      
  },
  addLink(value) {

    if (!this.arr)  {this.arr = []; 
                     //console.log("this arr created");
                    }
    else { 
      //console.log("thisLink | this.arr", this.arr)
     }
    //console.log("addLink | value", value)
    if (value == null) value = 'null'
    this.arr.push(value);
    //console.log("addLink | this", this)
    return this; 
  },
  removeLink(position) {
    //console.log("start remove position", position)
    //alert('a')
    //console.log("typeof position", typeof position)
    if (typeof position != 'number' || position > this.arr.length || position <= 0 ){
    this.arr = []
    throw new NotImplementedError('You can\'t remove incorrect link!');
    }

    let output = []
    let i = 1
    this.arr.map(e => {
       //console.log("output", output)
        if (i!=position) output.push(e)
        ++i;
    })
    
    this.arr = output
    
    return this     
  },
  reverseChain() {
    if(this.arr) this.arr = this.arr.reverse()
    return this
  },
  finishChain() {
    console.log('this', this)
    //alert("s")
    let output = []
    output = this.arr
    this.arr = []
    console.log("output", '( '+output.join(' )~~( ')+' )')         
    return '( '+output.join(' )~~( ')+' )'
  }
};

// console.log(  
//   chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain()
// )

// console.log(
//   chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain()
  
// )

console.log(
  //chainMaker.addLink('8.963').reverseChain().reverseChain().reverseChain().reverseChain().addLink({ 0: 'first', 1: 'second', 'length': 2 }).reverseChain().addLink(3.14).addLink('DEF').reverseChain().finishChain()
  chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0)
  
)
//( DEF )~~( 3.14 )~~( 8.963 )~~( [object Object] )



