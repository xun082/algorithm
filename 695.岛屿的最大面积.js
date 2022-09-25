/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let result = 0;
  // 竖列 col  横行 row
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) {
        const count = dfs(row, col);

        result = Math.max(result, count);
      }
    }
  }

  return result;

  function dfs(row, col) {
    if (
      row < 0 ||
      row >= grid.length ||
      col < 0 ||
      col >= grid[0].length ||
      grid[row][col] === 0
    ) {
      return 0;
    }
    // 否则沉没
    grid[row][col] = 0;

    let count = 1;
    count += dfs(row - 1, col);
    count += dfs(row + 1, col);
    count += dfs(row, col - 1);
    count += dfs(row, col + 1);

    return count;
  }
};
// @lc code=end
