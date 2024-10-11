// Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.
//
//
//
// Example 1:
//
// Input: s = "Hello"
// Output: "hello"
// Example 2:
//
// Input: s = "here"
// Output: "here"
// Example 3:
//
// Input: s = "LOVELY"
// Output: "lovely"
//
//
// Constraints:
//
// 1 <= s.length <= 100
// s consists of printable ASCII characters.

function toLowerCase(s: string): string {
  let result: string = "";

  for (let i = 0; i < s.length; i++) {
    let charCode = s.charCodeAt(i);

    if (charCode <= 90 && charCode >= 65) {
      charCode += 32;
    }
    result += String.fromCharCode(charCode);
  }

  return result;
}

const s1 = "Hello";
const s2 = "here";
const s3 = "LOVELY";

console.log(toLowerCase(s1));
console.log(toLowerCase(s2));
console.log(toLowerCase(s3));
