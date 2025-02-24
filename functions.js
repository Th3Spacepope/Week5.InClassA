const midi2freq = function (midiNote) {
  let freq = refFreq * Math.pow(2, (midiNote - 69) / 12);
  return freq;
};

const freq2midi = function (frequency) {
  return 12 * Math.log2(frequency / 440) + 69;
};

const atodb = function (frequency) {
  let ratio = amp / 1;
  let bels = Math.log10(ratio);
  let dBFS = 20 * bels;
  return dBFS;
};
const dbtoa = function (db) {
  return Math.pow(10, db / 20);
};
