/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  /**
   * @author xun
   * @method 哈希表
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  const set = new Set(nums);

  let n = 0;

  for (const num of set) {
    if (!set.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      while (set.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }

      n = Math.max(n, currentStreak);
    }
  }

  return n;
};
// @lc code=end
