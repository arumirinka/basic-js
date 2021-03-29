class VigenereCipheringMachine {
  constructor (direction = true) {
    this.direction = direction;
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Enter required parameters!');  
    const messageLow = message.toLowerCase();
    const keyLow = key.toLowerCase();
    let res = '';
    let j = 0;

    messageLow.split('').map((el) => {
      if (this.alphabet.includes(el)) {
        const tmpNum = this.alphabet.indexOf(el) + this.alphabet.indexOf(keyLow.charAt(j % key.length));
        res += this.alphabet.charAt(tmpNum % this.alphabet.length).toUpperCase();
        j++;
      } else {
        res += el;
      }
    });

    if (!this.direction) return res.split('').reverse().join('');

    return res;
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Enter required parameters!');  
    const messageLow = message.toLowerCase();
    const keyLow = key.toLowerCase();
    let res = '';
    let j = 0;

    messageLow.split('').map((el) => {
      if (this.alphabet.includes(el)) {
        const tmpNum = this.alphabet.length + this.alphabet.indexOf(el) - this.alphabet.indexOf(keyLow.charAt(j % key.length));
        res += this.alphabet.charAt(tmpNum % this.alphabet.length).toUpperCase();
        j++;
      } else {
        res += el;
      }
    });

    if (!this.direction) return res.split('').reverse().join('');

    return res;
  }
}

module.exports = VigenereCipheringMachine;
