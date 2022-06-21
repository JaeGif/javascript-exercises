const add = function(x,y) {
  return (x + y)
};

const subtract = function(x,y) {
  return (x - y)

};

const sum = function(x) {
  let sumArray = 0
  for (let i = 0; i < x.length; i++) {
    sumArray += Number(x[i])
  }
  return sumArray

};

const multiply = function(x) {
  let arrayMultiply = 1
  for (let i = 0; i <= (x.length - 1); i++) {
    arrayMultiply *= x[i]
  } return arrayMultiply


};

const power = function(x,y) {
  return Math.pow(x, y)

};

const factorial = function(x) {
  // x! = x * (x-1) ... * (x-n) ... * 1
  let fact = 1
  for (let i = 1; i <= x; i++) {
    fact *= i
  }

  return fact
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
