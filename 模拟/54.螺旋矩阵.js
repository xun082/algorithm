/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  /**
   * @author xun
   * @method 按层模拟
   * @timeComplexity O(MN)
   * @spaceComplexity O(1)
   */
  if (!matrix.length || !matrix[0].length) return [];

  const rows = matrix.length;
  const columns = matrix[0].length;

  const order = [];
  let left = 0,
    right = columns - 1,
    top = 0,
    bottom = rows - 1;

  // 右边大于左边,下边大于上边
  while (left <= right && top <= bottom) {
    for (let column = left; column <= right; column++) {
      order.push(matrix[top][column]);
    }

    for (let row = top + 1; row <= bottom; row++) {
      order.push(matrix[row][right]);
    }

    if (left < right && top < bottom) {
      for (let column = right - 1; column > left; column--) {
        order.push(matrix[bottom][column]);
      }

      for (let row = bottom; row > top; row--) {
        order.push(matrix[row][left]);
      }
    }
    [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];
  }
  return order;
};

// @lc code=end
