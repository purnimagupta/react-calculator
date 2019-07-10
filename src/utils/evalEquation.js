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
  let returned_fun; 

  for (var i = 0; i < ops.length; i++) {
    console.log("i", i)
    for (var j = 0; j < old_calc.length; j++) {
        if (ops[i][old_calc[j]]) {
            returned_fun = ops[i][old_calc[j]];
            // console.log("2 ", currentOp)
        } else if (returned_fun) {
            console.log("j", j)
            // console.log("calc[j] ", calc[j])
            // console.log("newCalc is ", newCalc)
            new_calc[new_calc.length - 1] = returned_fun(new_calc[new_calc.length - 1], old_calc[j]);
            // console.log("3 ", newCalc)
            returned_fun = null;
        } else {
            new_calc.push(old_calc[j]);
            // console.log("4 ", newCalc)
        }
        console.log("1", new_calc);
    }
        old_calc = new_calc;
        // console.log("calc", calc)
        new_calc = [];
        // operators.length--;
    }
    if(old_calc.length > 1) {
      return { error: "something is wrong"}
    }
    else {
      return old_calc[0];
    }
}
 