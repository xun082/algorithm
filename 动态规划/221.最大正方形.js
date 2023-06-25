/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  /**
   * @author xun
   * @method 动态规划
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) return 0;

  let maxSide = 0;
  let row = matrix.length;
  let column = matrix[0].length;

  const path = new Array(row).fill().map(() => new Array(column));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === "1") {
        if (i === 0 || j === 0) path[i][j] = 1;
        else {
          path[i][j] = Math.min(
            Math.min(path[i - 1][j], path[i][j - 1], path[i - 1][j - 1]) + 1
          );
        }
      } else {
        path[i][j] = 0;
      }
      maxSide = Math.max(path[i][j], maxSide);
    }
  }

  return maxSide * maxSide;
};
// @lc code=end
