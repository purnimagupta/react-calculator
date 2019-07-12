/**
 * Returns an array of numbers and strings
 *
 * @param {String} string
 * @returns {Array} Array
 */
export default function parseStringEquation(string) {
  // --- Parse a calculation string into an array of numbers and operators
  let calculation = [],
      current = '';
  for (let i = 0, ch;  i<string.length; i++) {
      ch = string.charAt(i);
      if ('^*/+-'.indexOf(ch) > -1) {
          if (current === '' && ch === '-') {
              current = '-';
          } else {
              calculation.push(parseFloat(current), ch);
              current = '';
          }
      } else {
          current += string.charAt(i);
      }
  }
  if (current !== '') {
      calculation.push(parseFloat(current));
  }
  return calculation;
}