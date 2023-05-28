/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  /**
   * @author xun
   * @method 动态规划
   * @timeComplexity O(M * N)
   * @spaceComplexity O(N)
   */
  const m = nums1.length;
  const n = nums2.length;

  const path = new Array(n + 1).fill(0);
  let res = 0;

  for (let i = 1; i <= m; i++) {
    for (let j = n; j >= 1; j--) {
      if (nums1[i - 1] === nums2[j - 1]) path[j] = path[j - 1] + 1;
      else path[j] = 0;

      res = Math.max(path[j], res);
    }
  }

  return res;
};
// @lc code=end
