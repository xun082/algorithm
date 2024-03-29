/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  /**
   * @author xun
   * @method 暴力破解
   * @timeComplexity O(m+n)
   * @spaceComplexity O(log(m+n))
   */
  // nums1.splice(m, nums1.length - m, ...nums2);
  // nums1.sort((a, b) => a - b);
  /**
   * @author xun
   * @method 双指针
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  let p1 = m - 1;
  let p2 = n - 1;

  let current = 0;
  let tail = m + n - 1;

  while (p1 >= 0 || p2 >= 0) {
    if (p1 === -1) {
      current = nums2[p2--];
    } else if (p2 === -1) {
      current = nums1[p1--];
    } else if (nums1[p1] > nums2[p2]) {
      current = nums1[p1--];
    } else {
      current = nums2[p2--];
    }
    nums1[tail--] = current;
  }
};
// @lc code=end
