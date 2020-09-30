module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (date.hasOwnProperty('getMonth')) throw new Error;
  let month = date.getMonth();
  return month < 2 && month > -1 ? 'winter' : month < 5 ? 'spring' : month < 8 ? 'summer' 
    : month < 11 ? 'autumn' : month = 11 ? 'winter' : Error;
};
