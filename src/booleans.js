function negate(a) {
  if (a === false) {
    return true;
  }
  return false;
};

function both(a, b) {
if (a === true &&  b === true) {
  return true;
} return false;
};

function either(a, b) {
  if (a === true || b === true) {
    return true;
  } return false;
};

function none(a, b) {
  if (a === false && b === false) {
    return true;
  } return false;
};

function one(a, b) {
  // your code here
};

function truthiness(a) {
  // your code here
};

function isEqual(a, b) {
  // your code here
};

function isGreaterThan(a, b) {
  // your code here
};

function isLessThanOrEqualTo(a, b) {
  // your code here
};

function isOdd(a) {
  // your code here
};

function isEven(a) {
  // your code here
};

function isSquare(a) {
  // your code here
};

function startsWith(char, string) {
  // your code here
};

function containsVowels(string) {
  // your code here
};

function isLowerCase(string) {
  // your code here
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
