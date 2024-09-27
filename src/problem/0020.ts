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
  const parenthesis: { [key: string]: number } = {
    "(": 0,
    "{": 0,
    "[": 0,
  };
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      parenthesis[s[i]]++;
    }
    if (s[i] === ")") {
      parenthesis["("] == 1 ? (parenthesis["("] = 2) : (parenthesis["("] = 1);
    }
    if (s[i] === "]") {
      parenthesis["["] == 1 ? (parenthesis["["] = 2) : (parenthesis["["] = 1);
    }
    if (s[i] === "}") {
      parenthesis["{"] == 1 ? (parenthesis["{"] = 2) : (parenthesis["{"] = 1);
    }
  }
  return Object.values(parenthesis).filter((p) => p == 1).length >= 1 ? false : true;
}
