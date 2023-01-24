/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  /**
   * @author xun
   * @method 找出最长的后缀 9
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  const length = digits.length;
  for (let i = length - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i]++;
      for (let j = i + 1; j < length; j++) {
        digits[j] = 0;
      }
      return digits;
    }
  }
  const ans = new Array(length + 1).fill(0);
  ans[0] = 1;

  return ans;
};
// @lc code=end
