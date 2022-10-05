/*
 * @lc app=leetcode.cn id=1464 lang=javascript
 *
 * [1464] 数组中两元素的最大乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  //   nums.sort((a, b) => b - a);
  //   return (nums[0] - 1) * (nums[1] - 1);

  let num1 = nums[0];
  let num2 = nums[1];

  // 此时num1最大
  if (num1 < num2) {
    [num1, num2] = [num2, num1];
  }

  for (let i = 2; i < nums.length; i++) {
    //  找出最大的两个
    if (nums[i] > num1) {
      num2 = num1;
      num1 = nums[i];
    } else if (nums[i] > num2) {
      num2 = nums[i];
    }
  }

  return (num1 - 1) * (num2 - 1);
};
// @lc code=end
