/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  /**
   * @author xun
   * @method 单调栈
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  let result = 0;
  const stack = [-1];

  for (let i = 0; i < heights.length; i++) {
    while (stack.length > 1 && heights[stack[stack.length - 1]] > heights[i]) {
      result = Math.max(
        result,
        heights[stack.pop()] * (i - stack[stack.length - 1] - 1)
      );
    }
    stack.push(i);
  }

  while (stack.length > 1) {
    result = Math.max(
      result,
      heights[stack.pop()] * (heights.length - stack[stack.length - 1] - 1)
    );
  }

  return result;
};
// @lc code=end
