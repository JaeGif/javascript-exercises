const ftoc = function(farenheit) {
  // farenheit to celsius F = (C * (9/5)) + 32
  let celsius = ((farenheit-32) * (5/9))
  if (!Number.isInteger(celsius)) {
    celsius = celsius.toFixed(1)    // same as below for logic
  }
  return +celsius
};

const ctof = function(celsius) {
  // celsius to farenheit C = (F - 32) * (5/9)
  let farenheit = ((celsius * (9/5)) + 32)
  if (!Number.isInteger(farenheit)) { // if number is not an integer aka a floating point
    farenheit = farenheit.toFixed(1)  // round to 1 decimal
  }
  return +farenheit // unary operator to convert to number type
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
