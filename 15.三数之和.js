/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let list = [];
  // 首先对数组进行一次排序
  nums.sort((a, b) => a - b); //n*lgn

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    // nums[i]为基准 找另外两个数组元素
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      if (right === i) {
        right--;
      } else if (nums[left] + nums[right] + nums[i] === 0) {
        //   命中
        list.push([nums[left], nums[right], nums[i]]);
        //   继续找
        while (nums[left] === nums[left + 1]) {
          //   由于排序了，相同的数组在一起了
          left++;
        }
        left++;
        while (nums[right] === nums[right - 1]) {
          right--;
        }
        right--;
      } else if (nums[left] + nums[right] + nums[i] > 0) {
        //   数变大了
        right--;
      } else {
        //   数变小了
        left++;
      }
    }
  }
  return list;
};
// @lc code=end
