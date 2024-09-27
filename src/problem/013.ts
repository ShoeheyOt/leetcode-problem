// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// // Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// // Constraints:

// // 1 <= s.length <= 15
// // s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].

function romanToInt(s: string): number {
  //create a map to find value
  const romanMap: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  //initializing a value to store final result
  let result = 0;
  //iterate using for loop
  for (let i = 0; i < s.length; i++) {
    //declare next value of roman numeral, with default value as 0 if there is no next value.
    const nextNum = romanMap[s[i + 1]] || 0;
    //compare current value and next value
    if (romanMap[s[i]] >= nextNum) {
      //if current value is greater than or equal to next one add to result
      result += romanMap[s[i]];
    } else {
      //if smaller, subtract from result
      result -= romanMap[s[i]];
    }
  }
  //return calculated result
  // return result

  let num: number = 0;
  const arraiedString = s.split("");
  for (let i = 0; i < arraiedString.length; i++) {
    if (arraiedString[i] === "I") {
      if (arraiedString[i + 1] === "V") {
        num += 4;
      } else if (arraiedString[i + 1] === "X") {
        num += 9;
      } else {
        num += 1;
      }
    }

    if (arraiedString[i] === "V") {
      if (arraiedString[i - 1] !== "I") {
        num += 5;
      }
    }

    if (arraiedString[i] === "X") {
      if (arraiedString[i - 1] !== "I") {
        num += 10;
      }
    }
    if (arraiedString[i] === "L") {
      num += arraiedString[i - 1] === "X" ? 40 : 50;
    }

    if (arraiedString[i] === "C") {
      if (arraiedString[i + 1] === "D") {
        num += 400;
      } else if (arraiedString[i + 1] === "M") {
        num += 900;
      }
    }
    if (arraiedString[i] === "D") {
      if (arraiedString[i - 1] !== "C") {
        num += 500;
      }
    }
    if (arraiedString[i] === "M") {
      if (arraiedString[i - 1] !== "C") {
        num += 1000;
      }
    }
  }
  return num;
}
// "MCMXCIV"
