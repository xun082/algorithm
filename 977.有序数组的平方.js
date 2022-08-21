/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let [left, right] = [0, nums.length - 1];
  const temp = Array(nums.length);

  let k = right;

  while (left <= right) {
    const l = nums[left] * nums[left];
    const r = nums[right] * nums[right];
    if (l < r) {
      temp[k] = r;
      right--;
    } else {
      temp[k] = l;
      left++;
    }
    k--;
  }
  return temp;
};
// @lc code=end
