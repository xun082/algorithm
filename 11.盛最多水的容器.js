/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let result = 0;
  let vol = 0;

  let i = 0;
  let j = height.length - 1;

  while (i < j) {
    vol = (j - i) * Math.min(height[i], height[j]);
    result = Math.max(result, vol);

    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }

  return result;
};
// @lc code=end
