/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  /**
   * @author xun
   * @method 动态规划
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  // let p = 0;
  // let q = 0;
  // let r = 1;
  // for (let i = 1; i <= n; i++) {
  //   p = q;
  //   q = r;
  //   r = p + q;
  // }
  // return r;

  const sqrt5 = Math.sqrt(5);
  const fib =
    Math.pow((1 + sqrt5) / 2, n + 1) - Math.pow((1 - sqrt5) / 2, n + 1);
  return Math.round(fib / sqrt5);
};
// @lc code=end
