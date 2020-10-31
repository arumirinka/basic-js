module.exports = function repeater(str, options) {
  let {
    repeatTimes,
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator
  } = options;

  let addStr = new Array(additionRepeatTimes).fill(addition === null ? 'null' : addition).join(additionSeparator || '|');

  return new Array(repeatTimes).fill(str + addStr).join(separator || '+');
};
