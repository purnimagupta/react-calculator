/**
 * Returns an array of numbers and strings
 *
 * @param {String} equation
 * @returns {Array} Array
 */
export default function parseStringEquation(equation: string) : (string|number)[] {
  // --- Parse a calculation string into an array of numbers and operators
  let calculation = [],
      current = '';
  for (let i = 0, ch;  i<equation.length; i++) {
      ch = equation.charAt(i);
      if ('^*/+-'.indexOf(ch) > -1) {
          if (current === '' && ch === '-') {
              current = '-';
          } else {
              calculation.push(parseFloat(current), ch);
              current = '';
          }
      } else {
          current += equation.charAt(i);
      }
  }
  if (current !== '') {
      calculation.push(parseFloat(current));
  }
  return calculation;
}