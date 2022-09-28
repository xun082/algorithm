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
  // 双指针 头尾
  let head = 0;
  let tail = nums.length - 1;

  while (head < tail) {
    // 头为基数,尾为偶数,交换
    if (nums[head] % 2 === 1 && nums[tail] % 2 === 0) {
      [nums[head], nums[tail]] = [nums[tail], nums[head]];
    }

    if (nums[head] % 2 === 0) head++;

    if (nums[tail] % 2 === 1) tail--;
  }
  return nums;
};
// @lc code=end
