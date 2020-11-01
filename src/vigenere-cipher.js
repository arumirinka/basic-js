class VigenereCipheringMachine {
  constructor (direction) {
    this.direction = direction;
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Enter required parameters!');
    let res = [];
    let messageLow = message.toLowerCase();
    let keyLow = key.toLowerCase();
    let j = 0;
    for (let i = 0; i < messageLow.length; i++) {
      if (this.alphabet.indexOf(messageLow.charAt(i)) !== -1) {
        res.push(this.alphabet.charAt((this.alphabet.indexOf(messageLow.charAt(i)) + this.alphabet.indexOf(keyLow.charAt(j % key.length))) % this.alphabet.length));
        j++;
      } else {
        res.push(messageLow.charAt(i));
      }
    }
    return this.direction !== 'false' ? res.join('').toUpperCase() : res.reverse().join('').toUpperCase();
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Enter required parameters!');
    let res = [];
    let messageLow = message.toLowerCase();
    let keyLow = key.toLowerCase();
    let j = 0;
    for (let i = 0; i < messageLow.length; i++) {
      if (this.alphabet.indexOf(messageLow.charAt(i)) !== -1) {
        res.push(this.alphabet.charAt((this.alphabet.indexOf(messageLow.charAt(i)) + this.alphabet.length - this.alphabet.indexOf(keyLow.charAt(j % key.length))) % this.alphabet.length));
        j++;
      } else {
        res.push(messageLow.charAt(i));
      }
    }
    return this.direction !== 'false' ? res.join('').toUpperCase() : res.reverse().join('').toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
