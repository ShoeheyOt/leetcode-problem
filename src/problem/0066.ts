// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
//
// Increment the large integer by one and return the resulting array of digits.
//
//
//
// Example 1:
//
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// Example 2:
//
// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].
// Example 3:
//
// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].
//
//
// Constraints:
//
// 1 <= digits.length <= 100
// 0 <= digits[i] <= 9
// digits does not contain any leading 0's.

function plusOne(digits: number[]): number[] {
  // iterate through from ones place to biggre place
  for (let i = digits.length - 1; i >= 0; i--) {
    //if a element is not 9 plus one and early return with digits
    if (digits[i] != 9) {
      digits[i]++;
      return digits;
    }
    //if one is 9, update to 0
    digits[i] = 0;
  }
  //if the execution goes to this line which means all elements in the parameter changed from 9 to 0
  //add 1 as a element in first index with spread operator and return it
  return [1, ...digits];
}
//example
const digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
const digits2 = [9, 9];
console.log(plusOne(digits));

console.log(plusOne(digits2));
