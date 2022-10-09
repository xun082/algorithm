/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let index = 0;
  let count = 1;

  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] - nums[index] === count) {
      count++;
      continue;
    }
    const item = index === i ? `${nums[i]}` : `${nums[index]}->${nums[i]}`;
    result.push(item);
    index = i + 1;
    count = 1;
  }

  return result;
};
// @lc code=end
