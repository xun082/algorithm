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
  let n = obstacleGrid.length;
  let m = obstacleGrid[0].length;
  const dp = new Array(n).fill().map((item) => Array(m).fill(0)); //根据 obstacleGrid 构建一个全为 0 的二维数组

  for (let i = 0; i < n && obstacleGrid[i][0] === 0; i++) {
    dp[i][0] = 1; //判断障碍是否在第一列上，不在就写上 1
  }
  for (let i = 0; i < m && obstacleGrid[0][i] === 0; i++) {
    dp[0][i] = 1; //判断障碍是否在第一行上，不在就写上 1
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      // 判断障碍是否在（i,j）上
      dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[n - 1][m - 1];
};
// @lc code=end
