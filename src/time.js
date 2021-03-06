"use strict";

// DEPENDENCIES ---------------------------------------------------------------- //

const dayjs = require(`dayjs`);
const advancedFormat = require(`dayjs/plugin/advancedFormat`);
const duration = require(`dayjs/plugin/duration`);
const localizedFormat = require(`dayjs/plugin/localizedFormat`);
const minMax = require(`dayjs/plugin/minMax`);
const relativeTime = require(`dayjs/plugin/relativeTime`);
const timezone = require(`dayjs/plugin/timezone`);
const utc = require(`dayjs/plugin/utc`);
const weekday = require(`dayjs/plugin/weekday`);

dayjs.extend(advancedFormat);
dayjs.extend(duration);
dayjs.extend(localizedFormat);
dayjs.extend(minMax);
dayjs.extend(relativeTime);
dayjs.extend(timezone);
dayjs.extend(utc);
dayjs.extend(weekday);

// FUNCTIONS ---------------------------------------------------------------- //

/** Pass in an optional timestamp and get a time object
 * @param {string} timestamp - (Optional) Timestamp string or dayjs object
 * @param {object} options - (Optional) Pass in options (utc)
 * @returns {string} - Timestamp string
 */
const object = (timestamp = null, options = {}) => {
  try {
    // Parse options
    const { utc, tz } = options;

    // Create a time object (using utc if applicable)
    let timeObj = {};
    if (timestamp) timeObj = dayjs(timestamp);
    else timeObj = dayjs();

    // Convert to UTC (if applicable)
    if (utc) timeObj = timeObj.utc();

    // Convert to timezone (if applicable)
    if (tz && typeof tz === `string`) timeObj = timeObj.tz(tz);

    // Return the time object
    return timeObj;
  } catch (err) {
    console.error(`Failed to create time object:`, err);
  }

  // Fallback to null
  return null;
};

/** Pass in an optional timestamp and format it
 * @param {string} timestamp - (Optional) Timestamp string or dayjs object
 * @param {object} options - (Optional) Pass in options (utc, format)
 * @returns {string} - Timestamp string
 */
const stamp = (timestamp = null, options = {}) => {
  try {
    // Parse options
    const { utc, tz, format } = options;

    // Create a time object (using utc if applicable)
    let timeObj = {};
    if (timestamp) timeObj = dayjs(timestamp);
    else timeObj = dayjs();

    // Convert to UTC (if applicable)
    if (utc) timeObj = timeObj.utc();

    // Convert to timezone (if applicable)
    if (tz && typeof tz === `string`) timeObj = timeObj.tz(tz);

    // Convert to a formatted string
    let timeStr = ``;
    if (format) timeStr = timeObj.format(format);
    else timeStr = timeObj.format();

    // Return the formatted timestamp
    return timeStr;
  } catch (err) {
    console.error(`Failed to create timestamp:`, err);
  }

  // Fallback to null
  return null;
};

/** Get the difference between two times (default in seconds) */
const diff = (timestamp1 = ``, timestamp2 = ``, config = {}) => {
  let myConfig = {
    absolute: true,
    unit: `second`,
    ...config,
  };

  let timeObj1 = dayjs(timestamp1);
  let timeObj2 = dayjs(timestamp2);

  if (timeObj1 && timeObj2) {
    let duration = timeObj2.diff(timeObj1, myConfig.unit);
    if (myConfig.absolute) duration = Math.abs(duration);
    return duration;
  }
  return 0;
};

// EXPORT ---------------------------------------------------------------- //

module.exports = {
  object,
  stamp,
  diff,
};
