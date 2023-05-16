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
  /**
   * @author xun
   * @method 枚举
   * @timeComplexity O(N n)
   * @spaceComplexity O(1)
   */
  let ans = 0;
  for (let i = 2; i < n; i++) ans += isPrime(i);

  return ans;

  function isPrime(x) {
    for (let i = 2; i * i <= x; i++) {
      if (x % i === 0) return 0;
    }
    return 1;
  }
};
// @lc code=end
