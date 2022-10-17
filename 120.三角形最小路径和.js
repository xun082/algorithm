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
  const depth = triangle.length - 1; //深度

  //   const dp = [];
  const path = new Array(triangle.length).fill([]);

  path[depth] = triangle[depth];

  for (let i = depth - 1; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      // 状态转移方程
      // 当前节点的最小路径等于 Min(左下节点的最小路径, 右下节点最小路径) + 当前节点路径值
      path[i][j] =
        Math.min(path[i + 1][j], path[i + 1][j + 1]) + triangle[i][j];
    }
  }

  return path[0][0]; // 返回第0层第0个元素的最小路径
};
// @lc code=end
