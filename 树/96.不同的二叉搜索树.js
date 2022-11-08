/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  /**
   * @author xun
   * @method 动态规划
   * @timeComplexity O(N * N)
   * @spaceComplexity O(N)
   */
  //   const path = new Array(n + 1).fill(0);
  //   path[0] = 1;
  //   path[1] = 1;
  //   for (let i = 2; i <= n; i++) {
  //     for (let j = 1; j <= i; j++) {
  //       path[i] += path[j - 1] * path[i - j];
  //     }
  //   }
  //   return path[n];
  /**
   * @author xun
   * @method 数字
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */

  let result = 1;
  for (let i = 0; i < n; i++) {
    result = (result * 2 * (2 * i + 1)) / (i + 2);
  }
  return result;
};
// @lc code=end
