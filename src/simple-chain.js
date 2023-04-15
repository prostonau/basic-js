const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */


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
    if (typeof position != 'number' || position > this.arr.length || position <= 0 )
    throw new NotImplementedError('You can\'t remove incorrect link!');

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
    //console.log('this', this)
    let output = []
    output = this.arr
    console.log("output", '( '+output.join(' )~~( ')+' )')     
    return '( '+output.join(' )~~( ')+' )'
  }
};



module.exports = {
  chainMaker
};
