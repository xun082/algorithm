/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  /**
   * @author xun
   * @method 排序+双指针
   * @timeComplexity O(m log(m) + n log(n))
   * @spaceComplexity O(min(m,n))
   */
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  const result = [];
  let i = 0;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      result.push(nums1[i]);
      i++;
      j++;
    } else {
      nums1[i] < nums2[j] ? i++ : j++;
    }
  }
  return result;
};
// @lc code=end
