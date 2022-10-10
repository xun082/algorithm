/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  if (nums.length <= 1) return;

  let leftHand = Infinity;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      leftHand = i;
      break;
    }
  }

  for (let i = nums.length - 1; i > leftHand; i--) {
    if (nums[i] > nums[leftHand]) {
      [nums[i], nums[leftHand]] = [nums[leftHand], nums[i]];
      let chopped = nums.splice(leftHand + 1);
      // 数组颠倒
      chopped.reverse();
      nums.push(...chopped);
      return;
    }
  }

  nums.sort((a, b) => a - b);
};
// @lc code=end
