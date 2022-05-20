// DEPENDENCIES ---------------------------------------------------------------- //

const format = require(`./src/format`);
const math = require(`./src/math`);
const time = require(`./src/time`);
const utils = require(`./src/utils`);

// TEST LOG ACTIVATION ---------------------------------------------------------------- //

const _logs = true;

const log_format = false;
const log_math = false;
const log_time = true;
const log_utils = false;

// TEST LOG VARIABLES ---------------------------------------------------------------- //

const dirtyText = ` Hello! I... am Eric: The greatest of all time <insert_cool-here>.   `;
const testText = `test text. for normal text functions.`;
const breakText = `  test+Camel_snake-kebab, sPace case. `;
const phoneNumber = `8045176815`;
const numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const timestamp = `2022-06-01T00:00:00.000+00:00`;

// TEST LOGS ---------------------------------------------------------------- //

if (_logs && log_format) {
  console.log(`\n<------------------------ FORMAT ------------------------>`);
  console.log();
  console.log(`Cleanse text:           "${format.cleanseText(dirtyText)}"`);
  console.log(`lower case:             "${format.text(testText, `lower`)}"`);
  console.log(`Sentence case:          "${format.text(testText, `sentence`)}"`);
  console.log(`Title Case:             "${format.text(testText, `title`)}"`);
  console.log(`UPPER CASE:             "${format.text(testText, `upper`)}"`);
  console.log(`condensedcase:          "${format.text(breakText, `condensed`)}"`);
  console.log(`condensedsentencecase:  "${format.text(breakText, `condensed-sentence`)}"`);
  console.log(`CONDENSEDUPPERCASE:     "${format.text(breakText, `condensed-upper`)}"`);
  console.log(`camelCase:              "${format.text(breakText, `camel`)}"`);
  console.log(`CamelSentenceCase:      "${format.text(breakText, `camel-sentence`)}"`);
  console.log(`snake_case:             "${format.text(breakText, `snake`)}"`);
  console.log(`Snake_sentence_case:    "${format.text(breakText, `snake-sentence`)}"`);
  console.log(`Snake_Title_Case:       "${format.text(breakText, `snake-title`)}"`);
  console.log(`SNAKE_UPPER_CASE:       "${format.text(breakText, `snake-upper`)}"`);
  console.log(`kebab-case:             "${format.text(breakText, `kebab`, false)}"`);
  console.log(`Kebab-sentence-case:    "${format.text(breakText, `kebab-sentence`, false)}"`);
  console.log(`Kebab-Title-Case:       "${format.text(breakText, `kebab-title`, false)}"`);
  console.log(`KEBAB-UPPER-CASE:       "${format.text(breakText, `kebab-upper`, false)}"`);
  console.log(`space case:             "${format.text(breakText, `space`, false)}"`);
  console.log(`Space sentence case:    "${format.text(breakText, `space-sentence`, false)}"`);
  console.log(`Space Title Case:       "${format.text(breakText, `space-title`, false)}"`);
  console.log(`SPACE UPPER CASE:       "${format.text(breakText, `space-upper`, false)}"`);
  console.log();
  console.log(`Format phone number:    "${format.phone(phoneNumber)}"`);
}

if (_logs && log_math) {
  console.log(`\n<------------------------ MATH ------------------------>`);
  console.log();
  console.log(`ADD 5+3 = ${math.add(5, 3)}`);
  console.log(`SUBTRACT 36-6 = ${math.subtract(36, 6)}`);
  console.log(`MULTIPLY 6x6 = ${math.multiply(6, 6)}`);
  console.log(`DIVIDE 12/3 = ${math.divide(12, 3)}`);
  console.log(`POWER 2^8 = ${math.power(2, 8)}`);
  console.log(`REMAINDER 13/3 = ${math.remainder(13, 3)}`);
  console.log(`AVERAGE OF 0-9 = ${math.average(numbersArray)}`);
  console.log(`MINIMUM OF 0-9 = ${math.min(numbersArray)}`);
  console.log(`MAXIMUM OF 0-9 = ${math.max(numbersArray)}`);
  console.log(`ALGEBRA 2x+3=19, x = ${math.algebra("2x+3=19")}`);
  console.log(`RANDOM FLOAT 0-10 = ${math.rdmFloat(0, 10)}`);
  console.log(`RANDOM INTEGER 0-100 = ${math.rdmInt(0, 100)}`);
}

if (_logs && log_time) {
  console.log(`\n<------------------------ TIME ------------------------>`);
  // console.log();
  // console.log(`Now, ISO:`, time.stamp());
  // console.log(`Now, Custom:`, time.stamp(null, { format: `MM/DD/YYYY hh:mm A` }));
  // console.log(`Specific time, ISO, UTC:`, time.stamp(timestamp, { utc: true }));
  // console.log(`Specific time, Custom, UTC:`, time.stamp(timestamp, { format: `MM/DD/YYYY hh:mm A`, utc: true, tz: `America/New_York` }));
  // console.log();
  // console.log(`Now, Object:`, time.object());
  // console.log(`Specific time, Object, UTC:`, time.object(timestamp, { utc: true, tz: `America/Phoenix` }));
  console.log();
  console.log(`UTC Object:`, time.object(timestamp, { utc: true }));
  console.log(`UTC Stamp:`, time.stamp(timestamp, { utc: true, format: `MM/DD/YYYY hh:mm A` }));
  console.log(`UTC Stamp ISO:`, time.stamp(timestamp, { utc: true }));
  console.log(`Local Object:`, time.object(timestamp));
  console.log(`Local Stamp:`, time.stamp(timestamp, { format: `MM/DD/YYYY hh:mm A` }));
  console.log(`Local Stamp ISO:`, time.stamp(timestamp));
  console.log(`Phoenix Object:`, time.object(timestamp, { tz: `America/Phoenix` }));
  console.log(`Phoenix Stamp:`, time.stamp(timestamp, { tz: `America/Phoenix`, format: `MM/DD/YYYY hh:mm A z` }));
  console.log(`Phoenix Stamp ISO:`, time.stamp(timestamp, { tz: `America/Phoenix` }));
  console.log(`New York Object:`, time.object(timestamp, { tz: `America/New_York` }));
  console.log(`New York Stamp:`, time.stamp(timestamp, { tz: `America/New_York`, format: `MM/DD/YYYY hh:mm A z` }));
  console.log(`New York Stamp ISO:`, time.stamp(timestamp, { tz: `America/New_York` }));
}

if (_logs && log_utils) {
  console.log(`\n<------------------------ UTILS ------------------------>`);
  console.log();
  console.log(`Check if object - {}:`, utils.isObj({}));
  console.log(`Check if object with props - {}:`, utils.isObjWithProps({}));
  console.log();
  console.log(`Check if array - []:`, utils.isArray([]));
  console.log(`Check if array with values - []:`, utils.isArrayWithValues([]));
  console.log();
  console.log(`Reverse an array of numbers (0-9):`, utils.reverse(numbersArray));
  console.log(`Shuffle an array of numbers (0-9):`, utils.shuffle(numbersArray));
}
