// Write a function to find the longest common prefix string amongst an array of strings.
//
// If there is no common prefix, return an empty string "".
//
//
//
// Example 1:
//
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:
//
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
//
//
// Constraints:
//
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

function longestCommonPrefix(strs: string[]): string {
  //if params has no string, return with empty as not common prefix
  if (!strs.length) return "";

  //find shortest words in the params array as return can't be longer than shortest word
  const shortestStr: string = strs.reduce((acc, curr) => (acc.length < curr.length ? acc : curr));

  //compare shortestStr and each element in param array
  for (let i = 0; i < shortestStr.length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (shortestStr[i] !== strs[j][i]) {
        return shortestStr.slice(0, i);
      }
    }
  }

  return shortestStr;
}
