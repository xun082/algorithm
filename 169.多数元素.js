/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    //   如果存在,则取出他的值,也就是count
    // 不存在count就为0
    let count = map.get(nums[i]) || 0;
    count++;

    //   如果count大于数组长度的一半则成立
    if (count > nums.length / 2) return nums[i];

    map.set(nums[i], count);
  }
};
// @lc code=end
