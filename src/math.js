"use strict";

const { isArrayWithValues } = require(`./utils`);

// FUNCTIONS ---------------------------------------------------------------- //

/** Add two numbers */
const add = (a = 0, b = 0) => {
  if (isNaN(a) || isNaN(b)) return undefined;
  return Number(a) + Number(b);
};

/** Subtract two numbers */
const subtract = (a = 0, b = 0) => {
  if (isNaN(a) || isNaN(b)) return undefined;
  return Number(a) - Number(b);
};

/** Multiply two numbers */
const multiply = (a = 0, b = 0) => {
  if (isNaN(a) || isNaN(b)) return undefined;
  return Number(a) * Number(b);
};

/** Divide two numbers */
const divide = (a = 0, b = 0) => {
  if (isNaN(a) || isNaN(b)) return undefined;
  return Number(a) / Number(b);
};

/** Calculate the power of a number */
const power = (num = 0, exp = 1) => {
  if (isNaN(a) || isNaN(b)) return undefined;
  return Math.pow(Number(num), Number(exp));
};

/** Calculate the remainder between two numbers */
const remainder = (a = 0, b = 0) => {
  if (isNaN(a) || isNaN(b)) return undefined;
  return Number(a) % Number(b);
};

/** Find the average of an array */
const average = (array = []) => {
  if (isArrayWithValues(array)) {
    let sum = array.reduce((total, current) => total + current, 0);
    return sum / array.length;
  }
  return undefined;
};

/** Find the mode of an array */
const mode = (array = []) => {
  if (isArrayWithValues(array)) {
    {
      array = array.slice().sort((a, b) => a - b);

      let bestStreak = 1;
      let bestElem = array[0];
      let currentStreak = 1;
      let currentElem = array[0];

      for (let i = 1; i < array.length; i++) {
        if (array[i - 1] !== array[i]) {
          if (currentStreak > bestStreak) {
            bestStreak = currentStreak;
            bestElem = currentElem;
          }

          currentStreak = 0;
          currentElem = array[i];
        }

        currentStreak++;
      }

      return currentStreak > bestStreak ? currentElem : bestElem;
    }
  }
  return undefined;
};

/** Find the lowest number in an array */
const min = (array = []) => {
  if (isArrayWithValues(array)) {
    let currentMin = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] < currentMin) currentMin = array[i];
    }
    return currentMin;
  }
  return undefined;
};

/** Find the highest number in an array */
const max = (array = []) => {
  if (isArrayWithValues(array)) {
    let currentMax = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > currentMax) currentMax = array[i];
    }
    return currentMax;
  }
  return undefined;
};

/** Solve for `x` in an algebraic equation */
const algebra = (equation = ``) => {
  if (equation && typeof equation === `string`) {
    var xIndex = equation.indexOf(`x`);
    var signIndex = xIndex + 1;
    var equalIndex = equation.indexOf(`=`);
    var a = parseFloat(equation.substring(0, xIndex));
    var sign = equation[signIndex];
    var b = parseFloat(equation.substring(signIndex + 1, equalIndex));
    var c = parseFloat(equation.substring(equalIndex + 1, equation.length));

    if (sign === `+`) return (c - b) / a;
    if (sign === `-`) return (c + b) / a;
    if (sign === `*`) return c / b / a;
    if (sign === `/`) return (c * b) / a;
  }
  return null;
};

/** Roll a random float between 2 numbers
 * @param {number} min - Minimum possible float
 * @param {number} max - Maximum possible float
 * @returns {number} Randomly generated float
 */
const rdmFloat = (min = 0, max = 1) => {
  if (isNaN(min) || isNaN(max)) return 0;
  const myMin = Number(min);
  const myMax = Number(max);
  return Math.random() * (myMax - myMin) + myMin;
};

/** Roll a random integer between 2 numbers
 * @param {number} min - Minimum possible integer
 * @param {number} max - Maximum possible integer
 * @returns {number} Randomly generated integer
 */
const rdmInt = (min = 0, max = 1) => {
  if (isNaN(min) || isNaN(max)) return 0;
  const myMin = Number(min);
  const myMax = Number(max);
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
};

/** Round a number with a specified precision */
const round = (num = 0, precision = 0) => {
  if (Number(num)) {
    const multiplier = Math.pow(10, precision);
    const output = Math.round(num * multiplier) / multiplier;
    return output;
  }
  return 0;
};

/** Clamp a number to zero if it's negative */
const clampNeg = (num = 0) => {
  if (Number(num) && Number(num) > 0) return Number(num);
  return 0;
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
  mode,
  min,
  max,
  algebra,
  rdmFloat,
  rdmInt,
  round,
  clampNeg,
};
