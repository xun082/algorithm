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
  /**
   * @author xun
   * @method 双指针
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  let result = 0;
  let vol = 0;

  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    // 长 * 宽 (最小的宽)
    vol = (right - left) * Math.min(height[left], height[right]);

    result = Math.max(result, vol);
   
    if (height[left] <= height[right]) left++;
    else right--;
  }

  return result;
};
// @lc code=end
