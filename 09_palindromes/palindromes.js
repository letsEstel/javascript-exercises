const palindromes = function (str) {
  const alpha = "qwertyuiopasdfghjklzxcvbnm1234567890";
  const cleanStr = str
    .toLowerCase()
    .split("")
    .filter((word) => alpha.includes(word))
    .join("");

  const restr = cleanStr.split("").reverse().join("");
  console.log(cleanStr);
  console.log(restr);
  console.log(cleanStr.split(""));
  console.log(cleanStr.split("").reverse());
  return cleanStr === restr;
};

palindromes("recacer!");
// Do not edit below this line
module.exports = palindromes;
