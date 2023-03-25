/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  /**
   * @author xun
   * @method 动态规划
   * @timeComplexity O(MN)
   * @spaceComplexity O(MN)
   */
  let n = obstacleGrid.length;
  let m = obstacleGrid[0].length;

  const path = new Array(n).fill().map(() => new Array(m).fill(0));

  for (let i = 0; i < n && obstacleGrid[i][0] === 0; i++) {
    path[i][0] = 1;
  }

  for (let i = 0; i < m && obstacleGrid[0][i] === 0; i++) {
    path[0][i] = 1;
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      path[i][j] =
        obstacleGrid[i][j] === 1 ? 0 : path[i - 1][j] + path[i][j - 1];
    }
  }
  return path[n - 1][m - 1];
};
// @lc code=end
