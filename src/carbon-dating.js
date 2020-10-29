const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const res = Math.ceil(Math.log2(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD));
  return (!sampleActivity || typeof sampleActivity !== 'string' || sampleActivity > MODERN_ACTIVITY || !isFinite(res)) ? false : res;
};
