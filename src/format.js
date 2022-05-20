"use strict";

// DEPENDENCIES ---------------------------------------------------------------- //

// Regex text patterns
const textCleanupPattern = /[,.?!:;`'"/{}()<>]/g;
const textBreakPattern = /[\s_+-]/g;

// Breaking and Non-Breaking characters
const bsp = ` `;
const nbsp = `\xa0`;
const bkb = `-`;
const nbkb = `-\u2060`;

// Accepted text case strings for the "text" method
const acceptedCases = [
  `lower`,
  `sentence`,
  `title`,
  `upper`,
  `condensed`,
  `condensed-sentence`,
  `condensed-title`,
  `condensed-upper`,
  `camel`,
  `camel-sentence`,
  `camel-title`,
  `camel-upper`,
  `snake`,
  `snake-sentence`,
  `snake-title`,
  `snake-upper`,
  `kebab`,
  `kebab-sentence`,
  `kebab-title`,
  `kebab-upper`,
  `space`,
  `space-sentence`,
  `space-title`,
  `space-upper`,
];

// FUNCTIONS: TEXT ---------------------------------------------------------------- //

/** Cleanup a string of text (leave in case-sensitivity, spaces, underscores, pluses & dashes) */
const cleanseText = (str = null) => {
  if (str && typeof str === `string`) {
    let cleanStr = str.replace(textCleanupPattern, ``).trim();
    return cleanStr;
  }
  return str;
};

/** Un-capitalize every letter of every word in a string */
const lowerCase = (str = null) => {
  if (str && typeof str === `string`) {
    return str.toLowerCase().trim();
  }
  return str;
};

/** Capitalize the first letter of the first word in a string, optionally lowercase everything else */
const sentenceCase = (str = null) => {
  if (str && typeof str === `string`) {
    let newStr = str.trim();
    if (newStr.includes(`.`)) {
      newStr = newStr.split(`.`).map((s) => {
        const newTrim = s.trim();
        return newTrim.charAt(0).toUpperCase() + newTrim.slice(1);
      });
      newStr = newStr.join(`. `);
    } else newStr = newStr.charAt(0).toUpperCase() + newStr.slice(1);
    return newStr.trim();
  }
  return str;
};

/** Capitalize the first letter of each word in a string */
const titleCase = (str = null, split = ` `) => {
  if (str && typeof str === `string` && split) {
    if (!str.includes(split)) return str.charAt(0).toUpperCase() + str.slice(1);
    else {
      let arr = str.split(split);
      arr = arr.map((s) => s.charAt(0).toUpperCase() + s.slice(1));
      return arr.join(split).trim();
    }
  }
  return str;
};

/** Capitalize every letter of every word in a string */
const upperCase = (str = null) => {
  if (str && typeof str === `string`) {
    return str.toUpperCase().trim();
  }
  return str;
};

/** Breakdown a string of text to its simplest form (remove all formatting and spacing) */
const condensedCase = (str = null, type = null) => {
  if (str && typeof str === `string`) {
    const cleanStr = cleanseText(str).toLowerCase();
    let newStr = cleanStr.replace(textBreakPattern, ``);
    if (type === `sentence` || type === `title`) newStr = sentenceCase(newStr);
    if (type === `upper`) newStr = upperCase(newStr);
    return newStr;
  }
  return str;
};

/** Convert string to camel-case (exampleText) */
const camelCase = (str = null, type = null) => {
  if (str && typeof str === `string`) {
    const cleanStr = cleanseText(str).toLowerCase();
    let newStr = cleanStr.split(textBreakPattern);
    newStr = newStr.map((s, i) => {
      if (i !== 0) return sentenceCase(s);
      return s;
    });
    newStr = newStr.join(``);
    if (type === `sentence` || type === `title` || type === `upper`) newStr = sentenceCase(newStr);
    return newStr;
  }
  return str;
};

/** Convert string to snake-case (example_text) */
const snakeCase = (str = null, type = null) => {
  if (str && typeof str === `string`) {
    const cleanStr = cleanseText(str).toLowerCase();
    let newStr = cleanStr.replace(textBreakPattern, `_`);
    if (type === `first` || type === `sentence`) newStr = sentenceCase(newStr);
    if (type === `each` || type === `title`) newStr = titleCase(newStr, `_`);
    if (type === `all` || type === `upper`) newStr = upperCase(newStr);
    return newStr;
  }
  return str;
};

/** Convert string to kebab-case (example-text) */
const kebabCase = (str = null, type = null, allowBreaks = true) => {
  if (str && typeof str === `string`) {
    const cleanStr = cleanseText(str).toLowerCase();
    let newStr = cleanStr.replace(textBreakPattern, allowBreaks ? bkb : nbkb);
    if (type === `first` || type === `sentence`) newStr = sentenceCase(newStr);
    if (type === `each` || type === `title`) newStr = titleCase(newStr, allowBreaks ? bkb : nbkb);
    if (type === `all` || type === `upper`) newStr = upperCase(newStr);
    return newStr;
  }
  return str;
};

/** Convert string to space-case (example text) */
const spaceCase = (str = null, type = null, allowBreaks = true) => {
  if (str && typeof str === `string`) {
    const cleanStr = cleanseText(str).toLowerCase();
    let newStr = cleanStr.replace(textBreakPattern, allowBreaks ? bsp : nbsp);
    if (type === `first` || type === `sentence`) newStr = sentenceCase(newStr);
    if (type === `each` || type === `title`) newStr = titleCase(newStr, allowBreaks ? bsp : nbsp);
    if (type === `all` || type === `upper`) newStr = upperCase(newStr);
    return newStr;
  }
  return str;
};

/** General text case formatting
 * @param {String} str - String to edit
 * @param {String} caseType - Text case type to format to
 * @param {Boolean} allowBreaks - Allow breaks within the formatted text
 */
const text = (str = null, caseType = null, allowBreaks = true) => {
  try {
    // Parse out the types
    const fullType = caseType ? caseType.toLowerCase().replace(textBreakPattern, `-`) : null;
    const type = fullType ? fullType.split(`-`)[0] : null;
    const subType = fullType ? fullType.split(`-`)[1] : null;

    // Check each generic type
    if (type === `lower`) return lowerCase(str);
    if (type === `sentence`) return sentenceCase(str);
    if (type === `title`) return titleCase(str);
    if (type === `upper`) return upperCase(str);

    // Check each special type and subType
    if (type === `condensed`) return condensedCase(str, subType);
    if (type === `camel`) return camelCase(str, subType);
    if (type === `snake`) return snakeCase(str, subType);
    if (type === `kebab`) return kebabCase(str, subType, allowBreaks);
    if (type === `space`) return spaceCase(str, subType, allowBreaks);
  } catch (err) {
    console.error(`Failed to format text:`, err);
  }

  // Fallback to the string passed in
  return str;
};

// FUNCTIONS: PHONE ---------------------------------------------------------------- //

/** Format a phone number string to the human-readable standard */
const phone = (input = null, allowBreaks = true) => {
  try {
    // Parse options
    let space = ` `;
    let kebab = `-`;
    if (!allowBreaks) {
      space = `\xa0`;
      kebab = `-\u2060`;
    }

    // Parse input & apply options
    if (input) {
      let cleaned = (`` + input).replace(/\D/g, ``);
      let match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
      if (match) {
        let intlCode = match[1] ? `+1 ` : ``;
        return [intlCode, `(`, match[2], `)${space}`, match[3], kebab, match[4]].join(``);
      }
    }
  } catch (err) {
    console.error(`Failed to format phone number:`, err);
  }

  // Fallback to returning the input
  return input;
};

// EXPORT ---------------------------------------------------------------- //

module.exports = {
  acceptedCases,
  cleanseText,
  lowerCase,
  sentenceCase,
  titleCase,
  upperCase,
  condensedCase,
  camelCase,
  snakeCase,
  kebabCase,
  spaceCase,
  text,
  phone,
};
