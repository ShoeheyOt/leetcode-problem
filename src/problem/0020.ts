// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
// An input string is valid if:
//
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
//
//
// Example 1:
//
// Input: s = "()"
//
// Output: true
//
// Example 2:
//
// Input: s = "()[]{}"
//
// Output: true
//
// Example 3:
//
// Input: s = "(]"
//
// Output: false
//
// Example 4:
//
// Input: s = "([])"
//
// Output: true
//
//
//
// Constraints:
//
// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

function isValid(s: string): boolean {
  const stack: string[] = [];
  const pairs: { [key: string]: string } = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    if (char in pairs) {
      // If it's a closing bracket, check if the stack has a matching opening bracket
      if (!stack.length || stack.pop() !== pairs[char]) {
        return false;
      }
    } else {
      // If it's an opening bracket, push it onto the stack
      stack.push(char);
    }
  }

  // After iterating through all characters, if the stack is empty, all brackets were matched correctly
  return !stack.length;
}
const test = "{}()";
const s = "([)]";
console.log(isValid(s));
console.log(test);
