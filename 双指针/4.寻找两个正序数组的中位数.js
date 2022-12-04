/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  /**
   * @author xun
   * @method 双指针
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  const num1_length = nums1.length;
  const num2_length = nums2.length;
  const length = num1_length + num2_length;

  let previousValue = -1;
  let currentValue = -1;
  let point1 = 0;
  let point2 = 0;

  // 双指针直接遍历,向后移动
  // 双指针直接遍历,向后移动
  for (let i = 0; i <= Math.floor(length / 2); i++) {
    previousValue = currentValue;
    if (
      point1 < num1_length &&
      (point2 >= num2_length || nums1[point1] < nums2[point2])
    )
      currentValue = nums1[point1++];
    else currentValue = nums2[point2++];
  }

  // 长度为单数的情况
  if (length % 2 === 0) return (previousValue + currentValue) / 2.0;
  else return currentValue;
};
// @lc code=end
