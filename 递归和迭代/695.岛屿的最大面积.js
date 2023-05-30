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
  /**
   * @author xun
   * @method 深度优先
   * @timeComplexity O(MN)
   * @spaceComplexity O(MN)
   */
  const row = grid.length;
  const col = grid[0].length;

  function dfs(x, y) {
    // 判断越界
    if (x < 0 || x >= row || y < 0 || y >= col || grid[x][y] === 0) return 0;

    grid[x][y] = 0;

    let ans = 1;
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, 1, -1];

    for (let i = 0; i < dx.length; i++) {
      ans += dfs(x + dx[i], y + dy[i]);
    }
    return ans;
  }

  let res = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      res = Math.max(res, dfs(i, j));
    }
  }

  return res;
};
// @lc code=end
