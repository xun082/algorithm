/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  /**
   * @author xun
   * @method
   * @timeComplexity O(n log n log m)
   * @spaceComplexity O(log n)
   */
  nums.sort((x, y) => {
    let i = 10;
    let j = 10;

    while (i <= x) i *= 10;

    while (j <= y) j *= 10;

    return "" + (i * y + x) - ("" + (j * x + y));
  });

  if (nums[0] === 0) return "0";

  return nums.join("");
};
// @lc code=end
