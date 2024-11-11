const reverseString = function (sentence) {
  let res = "";
  let len = sentence.length;
  for (let i = len - 1; i >= 0; i--) {
    res += sentence[i];
  }
  return res;
};
// Do not edit below this line
module.exports = reverseString;
