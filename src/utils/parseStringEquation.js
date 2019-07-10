export default function parseStringEquation(string) {
  // This regex will convert string into an array of numbers and operators

  // Input: '1+2-33/45*78'.split(/([\\+\-\\*\\/]+)/)
  // Output:  ["1", "+", "2", "-", "33", "/", "45", "*", "78"]
  let final_array = [];
  const char_array = string.split(/([\\+\-\\*\\/]+)/);
  const len_string_array = char_array.length;

  for(let i=0; i<len_string_array; i++) {
    if(Number(char_array[i])) {
      let string_to_number = Number(char_array[i])
      final_array.push(string_to_number)
    }
    else {
      final_array.push(char_array[i])
    }
  }
  return final_array;
}