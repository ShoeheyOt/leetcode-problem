// Given two binary strings a and b, return their sum as a binary string.
//
//
//
// Example 1:
//
// Input: a = "11", b = "1"
// Output: "100"
// Example 2:
//
// Input: a = "1010", b = "1011"
// Output: "10101"
//
//
// Constraints:
//
// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.

function addBinary(a: string, b: string): string {
  const aReverse = a.split("").reverse();
  const bReverse = b.split("").reverse();
  const maxLength = Math.max(a.length, b.length);
  let result = "";
  let carry = 0;

  for (let i = 0; i < maxLength; i++) {
    const bitA = aReverse[i] === "1" ? 1 : 0;
    const bitB = bReverse[i] === "1" ? 1 : 0;
    const sum = bitA + bitB + carry;
    result = (sum % 2).toString() + result;
    carry = Math.floor(sum / 2);
  }
  if (carry > 0) {
    result = carry.toString() + result;
  }
  return result || "0";
}

const a =
  "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101";
const b =
  "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011";

console.log(addBinary("11", "1"));
console.log(addBinary(a, b));
