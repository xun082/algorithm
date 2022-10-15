/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let result = 0;

  const isPrime = (x) => {
    for (let i = 2; i * i <= x; ++i) {
      if (x % i === 0) {
        return false;
      }
    }
    return true;
  };

  for (let i = 2; i < n; ++i) {
    result += isPrime(i);
  }

  return result;
};
// @lc code=end
