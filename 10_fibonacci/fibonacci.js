const fibonacci = function (i) {
  if (i < 0) {
    return "OOPS";
  }
  if (i == 0) {
    return 0;
  }
  if (i == 1 || i == 2) {
    return 1;
  }
  return fibonacci(i - 2) + fibonacci(i - 1);
};

// Do not edit below this line
module.exports = fibonacci;
