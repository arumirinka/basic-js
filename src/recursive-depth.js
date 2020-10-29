module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    if (arr.some(elem => Array.isArray(elem))) {
      let flatArray = arr.reduce((acc, val) => acc.concat(val), []);
      return depth + this.calculateDepth(flatArray);
    }
    return depth;
  }
};