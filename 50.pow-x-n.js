/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (x === 1 || x === 0) return x;
  if (n === 0) return 1;
  if (n === 1) return x;

  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  let ans = 1;
  let result = x;

  for (let i = n; i > 0; i /= 2) {
    // 二进制中两个都为1的就为1
    if ((i & 1) === 1) {
      ans *= result;
    }
    result *= result;
  }

  return ans;
};
// @lc code=end
