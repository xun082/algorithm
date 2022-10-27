/*
 * @lc app=leetcode.cn id=1287 lang=javascript
 *
 * [1287] 有序数组中出现次数超过25%的元素
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
  const map = new Map();

  arr.forEach((item) => map.set(item, map.has(item) ? map.get(item) + 1 : 1));
  for (let [key, value] of map) {
    if (value > arr.length / 4) return key;
  }
};
// @lc code=end
