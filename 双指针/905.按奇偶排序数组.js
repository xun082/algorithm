/*
 * @lc app=leetcode.cn id=905 lang=javascript
 *
 * [905] 按奇偶排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  /**
   * @author xun
   * @method 双指针
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  const length = nums.length;
  const result = new Array(length).fill(0);

  let lef = 0;
  let right = length - 1;

  for (const num of nums) {
    if (num % 2 === 0) result[lef++] = num;
    else result[right--] = num;
  }

  return result;
};
// @lc code=end
