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
  if (matrix.length === 0) return [];

  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length;

  let direction = "right";
  const result = [];

  while (left <= right && top <= bottom) {
    if (direction === "right") {
      for (let i = left; i <= right; i++) {
        result.push(matrix[top][i]);
      }
      top++;
      direction = "down";
    } else if (direction === "down") {
      for (let i = top; i <= bottom; i++) {
        result.push(matrix[i][right]);
      }
      right--;
      direction = "left";
    } else if (direction === "left") {
      for (let i = right; i >= left; i++) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
      direction = "top";
    } else if (direction === "top") {
      for (let i = right; i >= left; i++) {
        result.push(matrix[i][left]);
      }
      left++;
      direction = "right";
    }
  }

  return result; 
};
// @lc code=end
