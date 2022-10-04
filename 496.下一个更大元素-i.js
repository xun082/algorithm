/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  // nums1 中数字 x 的 下一个更大元素 是指 x 在 nums2 中对应位置 右侧 的 第一个 比 x 大的元素。
  // nums1 是 nums2 的子集。 nums2的长度会比1的长
  const map = new Map();

  const stack = [];

  for (let i = nums2.length - 1; i >= 0; i--) {
    const num = nums2[i];
    while (stack.length && num >= stack[stack.length - 1]) {
      stack.pop();
    }

    map.set(num, stack.length ? stack[stack.length - 1] : -1);
    stack.push(num);
  }

  return new Array(nums1.length)
    .fill(0)
    .map((_, index) => map.get(nums1[index]));
};
// @lc code=end
