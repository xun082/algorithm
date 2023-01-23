/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  /**
   * @author xun
   * @method 哈希表
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  const result = [];
  const map = new Map();

  for (const num of nums) {
    if (map.has(num)) map.set(num, map.get(num) + 1);
    else map.set(num, 1);
  }

  const m = new Map([...map].sort((a, b) => b[1] - a[1]));

  for (let i = 0; i < k; i++) {
    result[i] = [...m][i][0];
  }

  return result;
};

// @lc code=end
