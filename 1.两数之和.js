/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  /**
   * @author 暴力破解
   */
  // const length = nums.length;
  // for (let i = 0; i < length; i++) {
  //   for (let j = 0; j < length; j++) {
  //     if (nums[i] + nums[j] === target && i !== j) {
  //       return [i, j];
  //     }
  //   }
  // }
  /**
   * @author 哈希表
   */
  const object = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    // n是需要的值
    let n = target - num;

    if (num in object) {
      return [i, object[num]];
    } else {
      object[n] = i;
    }
  }
};
// @lc code=end
