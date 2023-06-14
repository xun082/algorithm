/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  /**
   * @author xun
   * @method 深度优先遍历
   * @timeComplexity O(MN)
   * @spaceComplexity O(MN)
   */
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        turnZero(i, j, grid);
        count++;
      }
    }
  }
  return count;

  function turnZero(i, j, grid) {
    if (
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j >= grid[0].length ||
      grid[i][j] !== "1"
    ) {
      return;
    }

    grid[i][j] = "2";

    turnZero(i + 1, j, grid);
    turnZero(i - 1, j, grid);
    turnZero(i, j + 1, grid);
    turnZero(i, j - 1, grid);
  }
};
// @lc code=end
