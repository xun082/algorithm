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
   * @author xun
   * @method 暴力破解
   * @timeComplexity O(N*N)
   * @spaceComplexity O(1)
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
   * @author xun
   * @method 哈希表
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let num = target - nums[i];

    if (map.has(num)) {
      return [map.get(num), i];
    } else {
      map.set(nums[i], i);
    }
  }
};
// @lc code=end
