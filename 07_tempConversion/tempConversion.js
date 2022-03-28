const ftoc = function(tempInF) {
  return Math.round(((tempInF - 32) / 1.8) * 10) / 10;
};

const ctof = function(tempInC) {
  return Math.round(((tempInC * 1.8) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
