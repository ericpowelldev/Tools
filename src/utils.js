"use strict";

// FUNCTIONS: GENERAL ---------------------------------------------------------------- //

/** Dig into a nested object and avoid type errors
 ** Looks at each nested field separated by dot-notation
 ** The double equals is necessary
 * @param {object} obj - Object with nested fields to dig into
 * @param {string} nestedKey - Dot-notation string to dig out of the nested object
 * @returns {any} A type-error-free `undefined` if the object does not have the property
 */
const dig = (obj = undefined, nestedKey = ``) => {
  if (obj && isObjWithProps(obj) && nestedKey && typeof nestedKey === `string`) {
    let value = nestedKey.split(`.`).reduce((o, x) => (o == undefined ? o : o[x]), obj);
    return value;
  }
  return undefined;
};

/** Create a mutable clone of an input
 ** WARNING: Does NOT clone nested methods/functions
 */
const clone = (input = null) => {
  if (input) return JSON.parse(JSON.stringify(input, null, 2));
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
  if (!input || !Array.isArray(input)) return false;
  return true;
};

/** Check if the input is an array and isnt empty */
const isArrayWithValues = (input = null) => {
  if (!input || !Array.isArray(input) || input.length <= 0) return false;
  return true;
};

/** Algorithm for reversing an array */
const reverse = (input = []) => {
  if (isArrayWithValues(input)) {
    for (let i = 0; i < input.length / 2; i++) {
      let tmp = input[i];
      input[i] = input[input.length - i - 1];
      input[input.length - i - 1] = tmp;
    }
    return input;
  }
  return [];
};

/** Algorithm for shuffling an array (Fisher-Yates Shuffle) */
const shuffle = (input = []) => {
  if (isArrayWithValues(input)) {
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
  }
  return [];
};

// FUNCTIONS: STRING ---------------------------------------------------------------- //

/** Function for checking if a string contains letters */
const containsLetter = (str = ``) => {
  if (str && typeof str === `string` && str.match(/[a-z]/i)) return true;
  else return false;
};

/** Function for checking if a string contains numbers */
const containsNumber = (str = ``) => {
  if (str && typeof str === `string` && /\d/.test(str)) return true;
  else return false;
};

// FUNCTIONS: DISTANCE ---------------------------------------------------------------- //

/**
 * Calculates the haversine distance between geopoint A, and B
 * @param {number[]} latlngA - [latitude, longitude] of point A
 * @param {number[]} latlngB - [latitude, longitude] of point B
 * @param {boolean} useMiles - Specify if we are using miles, otherwise km
 * @returns {number} A number distance in either km or miles
 */
const haversineDistance = (latlngA, latlngB, useMiles = true) => {
  if (latlngA && latlngB) {
    const toRadian = (angle) => (Math.PI / 180) * angle;
    const distance = (a, b) => (Math.PI / 180) * (a - b);
    const RADIUS_OF_EARTH_IN_KM = 6371;
    let lat1 = latlngA[0];
    let lat2 = latlngB[0];
    const lon1 = latlngA[1];
    const lon2 = latlngB[1];
    const dLat = distance(lat2, lat1);
    const dLon = distance(lon2, lon1);
    lat1 = toRadian(lat1);
    lat2 = toRadian(lat2);
    // Haversine Formula
    const a = Math.pow(Math.sin(dLat / 2), 2) + Math.pow(Math.sin(dLon / 2), 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.asin(Math.sqrt(a));
    let finalDistance = RADIUS_OF_EARTH_IN_KM * c;
    // Check for useMiles
    if (useMiles) finalDistance /= 1.60934;
    return finalDistance;
  }
  return 0;
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
  haversineDistance,
};
