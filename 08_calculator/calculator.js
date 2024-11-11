const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (list) {
  return list.reduce((res, cur) => {
    return res + cur;
  }, 0);
};

const multiply = function (list) {
  return list.reduce((res, cur) => res * cur);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  res = 1;
  for (let i = 1; i <= a; i++) {
    res = res * i;
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
