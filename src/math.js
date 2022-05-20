"use strict";

// FUNCTIONS ---------------------------------------------------------------- //

/** Function for adding parameters */
const add = (a, b) => {
  return parseFloat(a) + parseFloat(b);
};

/** Function for subtracting parameters [subtract(4, 3)] */
const subtract = (a, b) => {
  return parseFloat(a) - parseFloat(b);
};

/** Function for multiplying parameters */
const multiply = (a, b) => {
  return parseFloat(a) * parseFloat(b);
};

/** Function for dividing parameters */
const divide = (a, b) => {
  return parseFloat(a) / parseFloat(b);
};

/** Function for returning the power of a number */
const power = (num, exp) => {
  return Math.pow(parseFloat(num), parseFloat(exp));
};

/** Function for finding the remainder between parameters after division (Used with divide) */
const remainder = (a, b) => {
  return parseFloat(a) % parseFloat(b);
};

/** Function for finding the average in an array */
const average = (array) => {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total / array.length;
};

/** Function for finding the minimum in an array */
const min = (array) => {
  let currentMin = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < currentMin) currentMin = array[i];
  }
  return currentMin;
};

/** Function for finding the maximum in an array */
const max = (array) => {
  let currentMax = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > currentMax) currentMax = array[i];
  }
  return currentMax;
};

/** Function to solve for "x" in an algebraic equation */
const algebra = (equation) => {
  var xIndex = equation.indexOf("x");
  var signIndex = xIndex + 1;
  var equalIndex = equation.indexOf("=");
  var a = parseFloat(equation.substring(0, xIndex));
  var sign = equation[signIndex];
  var b = parseFloat(equation.substring(signIndex + 1, equalIndex));
  var c = parseFloat(equation.substring(equalIndex + 1, equation.length));

  if (sign === "+") return (c - b) / a;
  else if (sign === "-") return (c + b) / a;
  else if (sign === "*") return c / b / a;
  else if (sign === "/") return (c * b) / a;
  else return undefined;
};

/** Function for a random float between 2 numbers
 * @param {Number} min - Minimum possible float
 * @param {Number} max - Maximum possible float
 * @returns {Number} Randomly generated float
 */
const rdmFloat = (min, max) => {
  if (isNaN(min) || isNaN(max)) return 0;
  const myMin = parseFloat(min);
  const myMax = parseFloat(max);
  return Math.random() * (myMax - myMin) + myMin;
};

/** Function for a random integer between 2 numbers
 * @param {Number} min - Minimum possible integer
 * @param {Number} max - Maximum possible integer
 * @returns {Number} Randomly generated integer
 */
const rdmInt = (min, max) => {
  if (isNaN(min) || isNaN(max)) return 0;
  const myMin = parseInt(min);
  const myMax = parseInt(max);
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
};

// EXPORT ---------------------------------------------------------------- //

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  remainder,
  average,
  min,
  max,
  algebra,
  rdmFloat,
  rdmInt,
};
