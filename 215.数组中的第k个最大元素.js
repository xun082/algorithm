/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  // 快排
  quicksort(nums, 0, nums.length - 1);

  return nums[nums.length - k];
};

const quicksort = (nums, left, right) => {
  if (right < left) return;

  let i = left;
  let j = right;
  let key = nums[i];

  while (i < j) {
    while (i < j && nums[j] > key) {
      j--;
    }
    if (i < j) {
      nums[i] = nums[j];
      i++;
    }
    while (i < j && nums[i] < key) {
      i++;
    }

    if (i < j) {
      nums[j] = nums[i];
      j--;
    }
  }

  nums[i] = key;
  quicksort(nums, left, i - 1);
  quicksort(nums, i + 1, right);
};
// @lc code=end
