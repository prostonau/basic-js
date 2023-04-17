const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  //https://www.youtube.com/watch?v=i5LWUpbddyU

    constructor (type = true){
           this.type = type
    }

    isUpperCase(letter){
      let l = letter.charCodeAt()
      if (l> 64 && l < 91){
        return true
      }
      else {
        return false
      }
    }

    isLowerCase(letter){
      let l = letter.charCodeAt()
      if (l> 96 && l < 123){
        return true
      }
      else {
        return false
      }
    }

    isLetter(l){
      return (isUpperCase(l) || this.isLowerCase(l)) ? true : false
    }

    mod (n,m) {
      return ((n%m) + m) % m
    }

   
  
    encrypt (message, key) {
        if (!message || !key) throw new Error('Incorrect arguments!');
        let encrypt = ''
        let j = 0
        for (let i=0; i < message.length; i++){
          let curLetter = message[i]
          const A = 65
          const a = 97
          if (this.isUpperCase(curLetter)){
            let Pi = (curLetter.charCodeAt(0)-A)
            let Ki = (key[j % key.length].toUpperCase().charCodeAt()-A)
            let upperLetter = this.mod(Pi+Ki,26) 

            encrypt += String.fromCharCode(upperLetter+A)

            j++;
          }
          else if (this.isLowerCase(curLetter)){
            let Pi = (curLetter.charCodeAt()-a)
            let Ki = (key[j % key.length].toLowerCase().charCodeAt()-a)
            let lowerLetter = this.mod(Pi+Ki,26) 

            encrypt += String.fromCharCode(lowerLetter+a)

            j++;

          } else {
            encrypt += curLetter
          }

        }

        return this.type ? encrypt.toUpperCase() : encrypt.toUpperCase().split('').reverse().join('')
    }
    decrypt (encryptedMessage, key){
      if (!encryptedMessage || !key) throw new Error('Incorrect arguments!');

      let decrypted = "";
      let j = 0;
      for (let i = 0; i < encryptedMessage.length; i++) {
          let curLetter = encryptedMessage[i];
          const A = 65;
          const a = 97;

          if(this.isUpperCase(curLetter)) {
              let Ci = (curLetter.charCodeAt(0) - A);
              let Ki = (key[j % key.length].toUpperCase()).charCodeAt() - A;
              let upperLetter = this.mod(Ci - Ki, 26);

              decrypted += String.fromCharCode(upperLetter + A);

              j++;
          } else if(this.isLowerCase(curLetter)) {
              let Ci = (curLetter.charCodeAt(0) - a);
              let Ki = (key[j % key.length].toLowerCase()).charCodeAt() - a;
              let lowerLetter = this.mod(Ci - Ki, 26);

              decrypted += String.fromCharCode(lowerLetter + a);

              j++;
          } else {
              decrypted += curLetter;
          }
      }

      
      return this.type ? decrypted : decrypted.split('').reverse().join('')
     
    }
  }

module.exports = {
  VigenereCipheringMachine
};
