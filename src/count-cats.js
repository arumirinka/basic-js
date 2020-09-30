module.exports = function countCats(matrix) {
  return [].concat(...matrix).filter(val => val === '^^').length;
};
