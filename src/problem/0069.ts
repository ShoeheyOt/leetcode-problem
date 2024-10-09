// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
//
// You must not use any built-in exponent function or operator.
//
// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
//
//
// Example 1:
//
// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.
// Example 2:
//
// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
//
//
// Constraints:
//
// 0 <= x <= 231 - 1

function mySqrt(x: number): number {
  const bigInt = BigInt(x);

  if (bigInt < 2n) return Number(bigInt);

  let left = 2n;
  let right = bigInt / 2n;

  while (left <= right) {
    const mid = (left + right) / 2n;

    const num = mid * mid;

    if (num == bigInt) {
      return Number(mid);
    } else if (num < bigInt) {
      left = mid + 1n;
    } else {
      right = mid - 1n;
    }
  }
  return Number(right);
}

console.log(mySqrt(2147395599));
