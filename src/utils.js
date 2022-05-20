"use strict";

// FUNCTIONS: GENERAL ---------------------------------------------------------------- //

/** Dig into a nested object and avoid type errors
 * (The double equals is necessary)
 * @param {Object} obj - Object with nested fields to dig into
 * @param {String} nestedKey - (Optional) Dot-notation string to dig out of the nested object
 * @returns {any} Returns a type-error free "undefined"
 */
const dig = (obj = null, nestedKey = ``) => {
  if (obj && isObjWithProps(obj) && nestedKey) {
    let value = nestedKey.split(`.`).reduce((o, x) => (o == undefined ? o : o[x]), obj);
    return value;
  }
  return null;
};

/** Create a mutable clone of an input (WARNING: Does NOT work with nested methods!) */
const clone = (input = null) => {
  if (input) {
    return JSON.parse(JSON.stringify(input, null, 2));
  }
  return null;
};

// FUNCTIONS: OBJECT ---------------------------------------------------------------- //

/** Check if the input is an object (ignore emptiness) */
const isObj = (input = null) => {
  // Check if the input is an object
  if (!input || typeof input !== `object`) return false;
  return true;
};

/** Check if the input is an object and isnt empty */
const isObjWithProps = (input = null) => {
  // Check if the input is an object and isnt empty
  if (!input || typeof input !== `object` || Object.keys(input).length === 0) return false;
  return true;
};

// FUNCTIONS: ARRAY ---------------------------------------------------------------- //

/** Check if the input is an array (ignore emptiness) */
const isArray = (input = null) => {
  // Check if the input is an array
  if (!input || !Array.isArray(input)) return false;
  return true;
};

/** Check if the input is an array and isnt empty */
const isArrayWithValues = (input = null) => {
  // Check if the input is an array and isnt empty
  if (!input || !Array.isArray(input) || input.length <= 0) return false;
  return true;
};

/** Algorithm for reversing an array */
const reverse = (input = []) => {
  try {
    // Loop over the array and reverse it
    for (let i = 0; i < input.length / 2; i++) {
      let tmp = input[i];
      input[i] = input[input.length - i - 1];
      input[input.length - i - 1] = tmp;
    }
    return input;
  } catch (err) {
    console.error(`Failed to reverse array:`, err);
  }

  // Fallback to input
  return input;
};

/** Algorithm for shuffling an array (Fisher-Yates Shuffle) */
const shuffle = (input = []) => {
  try {
    // Setup current element
    var currentIndex = input.length,
      tempValue,
      randomIndex;

    while (0 !== currentIndex) {
      // Draw from the hat (Pick an element that's left)
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // Place into the next slot (Swap the current and random array elements)
      tempValue = input[currentIndex];
      input[currentIndex] = input[randomIndex];
      input[randomIndex] = tempValue;
    }
    return input;
  } catch (err) {
    console.error(`Failed to shuffle array:`, err);
  }

  // Fallback to input
  return input;
};

// FUNCTIONS: STRING ---------------------------------------------------------------- //

/** Function for checking if a string contains letters */
const containsLetter = (str = null) => {
  if (str && str.match(/[a-z]/i)) return true;
  else return false;
};

/** Function for checking if a string contains numbers */
const containsNumber = (str = null) => {
  if (str && /\d/.test(str)) return true;
  else return false;
};

// EXPORT ---------------------------------------------------------------- //

module.exports = {
  dig,
  clone,
  isObj,
  isObjWithProps,
  isArray,
  isArrayWithValues,
  containsLetter,
  containsNumber,
  reverse,
  shuffle,
};
