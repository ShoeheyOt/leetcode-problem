// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
//
//
//
// Example 1:
//
// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2
// Since 2 has only one digit, return it.
// Example 2:
//
// Input: num = 0
// Output: 0
//
//
// Constraints:
//
// 0 <= num <= 231 - 1
//

function addDigits(num: number): number {
  // while (num >= 10) {
  //   num = String(num)
  //     .split("")
  //     .reduce((sum, digit) => sum + parseInt(digit), 0);
  // }
  // return num;

  if (num == 0) return num;

  return 1 + ((num - 1) % 9);
}

const num1 = 32;
console.log(addDigits(num1));

const num2 = 4888987968767;
console.log(addDigits(num2));

const num3 = 99;
console.log(addDigits(num3));
