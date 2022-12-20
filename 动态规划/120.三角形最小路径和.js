/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  /**
   * @author xun
   * @method 动态规划
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  const row = triangle.length;

  if (row === 0) return 0;

  for (let i = row - 2; i >= 0; i--) {
    for (let j = 0, col = triangle[i].length; j < col; j++) {
      const min = Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
      triangle[i][j] += min;
    }
  }

  return triangle[0][0];
};
// @lc code=end
