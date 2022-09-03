/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let currentIndex = 0;
  let nextIndex = 0;
  let step = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    nextIndex = Math.max(nums[i] + i, nextIndex);
    if (i === currentIndex) {
      currentIndex = nextIndex;
      step++;
    }
  }

  return step;
};
// @lc code=end
