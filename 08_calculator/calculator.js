const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, item) => total + item, 0);
};

const multiply = function(array) {
  return array.reduce((total, item) => total * item, 1);
};

const power = function(a, b) {
	// return a ** b;

  let total = 1;
  for(let i = 0; i < b; i++)
    total *= a;

  return total;
};

const factorial = function(n) {
	if (n === 0) return 1;
  else return n * factorial(n-1);
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
