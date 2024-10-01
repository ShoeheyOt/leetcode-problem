// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.
//
//
//
// Example 1:
//
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:
//
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:
//
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

function isPalindrome(x: number): boolean {
  for (let i = 0; i < x.toString().length; i++) {
    if (x.toString()[i] !== x.toString()[x.toString().length - 1 - i]) {
      return false;
    }
  }
  return true;
}
