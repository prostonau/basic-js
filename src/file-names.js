const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let i = 0
  let output = []

  names.map(e => {
    let a = names.slice(0,i).filter(c=>c==e).length

    //console.log("e",e,"| a",a, "|output", output, "output.filter(c=>c==e).length", output.filter(c=>c==e).length)

    if (a>0 ) output.push(e+'('+(parseInt(a))+')') 
    else if (output.filter(c=>c==e).length > 0) output.push(e+'('+(parseInt(output.filter(c=>c==e).length))+')') 
    else output.push(e) 
    ++i;
  })
 
  return output
}

module.exports = {
  renameFiles
};
