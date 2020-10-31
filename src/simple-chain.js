const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value = '( )') {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (!position || !(Number.isInteger(position))) {
      this.chain = [];
      throw new Error('Wrong position!');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let res = [...this.chain];
    this.chain = [];
    return res.join('~~');
  }
};

module.exports = chainMaker;
