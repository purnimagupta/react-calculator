
/**
 * Returns the first element of an array
 *
 * @param {String[]} old_calc
 * @return {Number} Number
 */
// export interface errMsg {
//   error: string;
// }
interface operatorsObj {
  (old_calc: (string|number)[]): Equation;
}


interface ops {
  [key: string] : (a: number, b: number) => number
}

export default function calculateEquation(old_calc: (string |number)[]) : Equation {
  let ops = [
    {
      '*': function(a: number, b: number) {
        return a * b
      },
  
      '/': function(a: number, b: number) {
        return a / b
      },
    }, 
    {
      '+': function(a: number, b: number) {
        return a + b
      },
  
      '-': function(a: number, b: number) {
        return a - b
      }
    } 
  ] as ops[];

  let new_calc: (string|number)[] = [];
  let returned_func;

  for (let i = 0; i < ops.length; i++) {
    for (let j = 0; j < old_calc.length; j++) {

        if (ops[i][old_calc[j]]) {
            returned_func = ops[i][old_calc[j]];
        } else if (returned_func) {
            new_calc[new_calc.length - 1] = returned_func(
              new_calc[new_calc.length - 1] as number,
              old_calc[j] as number
            );
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
      return { result: old_calc[0]  as number };
    }
}
 
export interface Equation {
  result?:  number,
  error?: string
}