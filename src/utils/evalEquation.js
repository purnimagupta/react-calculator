
/**
 * Returns the first element of an array
 *
 * @param {String[]} old_calc
 * @return {Number} Number
 */

export default function calculateEquation(old_calc) {
  let ops = [
    {
      '*': function(a, b) {
        return a * b
      },
  
      '/': function(a, b) {
        return a / b
      },
    }, 
    {
      '+': function(a, b) {
        return a + b
      },
  
      '-': function(a, b) {
        return a - b
      }
    } 
  ];

  let new_calc= [];
  let returned_func;

  for (let i = 0; i < ops.length; i++) {
    for (let j = 0; j < old_calc.length; j++) {

        if (ops[i][old_calc[j]]) {
            returned_func = ops[i][old_calc[j]];
        } else if (returned_func) {
            new_calc[new_calc.length - 1] = returned_func(new_calc[new_calc.length - 1], old_calc[j]);
            returned_func = null;
        } else {
            new_calc.push(old_calc[j]);
        }
    }
        old_calc = new_calc;
        new_calc = [];
    }

    if(old_calc.length > 1) {
      return { error: "something is wrong"}
    } else {
      return old_calc[0];
    }
}
 