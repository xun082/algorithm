/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

var fib = function (n) {
  /**
   * @author xun
   * @method 动态规划
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  // if (n < 2) return n;
  // let p = 0;
  // let q = 0;
  // let r = 1;
  // for (let i = 2; i <= n; i++) {
  //   p = q;
  //   q = r;
  //   r = p + q;
  // }
  // return r;
  /**
   * @author xun
   * @method 通项公式
   */
  const sqrt5 = Math.sqrt(5);

  const fibN = Math.pow((1 + sqrt5) / 2, n) - Math.pow((1 - sqrt5) / 2, n);

  return Math.round(fibN / sqrt5);
};
// @lc code=end
