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
  /**
   * @author xun
   * @method 一次遍历
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  const result = [];
  let i = 0;
  const length = nums.length;

  while (i < length) {
    const low = i;
    i++;
    while (i < length && nums[i] === nums[i - 1] + 1) {
      i++;
    }
    const high = i - 1;

    const temp = ["" + nums[low]];

    if (low < high) {
      temp.push("->");
      temp.push("" + nums[high]);
    }
    result.push(temp.join(""));
  }

  return result;
};
// @lc code=end
