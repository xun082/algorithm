/*
 * @lc app=leetcode.cn id=137 lang=javascript
 *
 * [137] 只出现一次的数字 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  //   const map = new Map();
  //   for (const num of nums) {
  //     map.set(num, (map.get(num) || 0) + 1);
  //   }
  //   let ans = 0;
  //   for (const [num, occ] of map.entries()) {
  //     if (occ === 1) {
  //       ans = num;
  //       break;
  //     }
  //   }
  //   return ans;
  // 二进制
  let ans = 0;

  for (let i = 0; i < 32; i++) {
    let total = 0;
    for (const num of nums) {
      total += (num >> i) & 1;
    }
    if (total % 3 !== 0) {
      ans |= 1 << i;
    }
  }

  return ans;
};
// @lc code=end
