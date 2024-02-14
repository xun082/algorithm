/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  /**
   * @author xun
   * @method 二分查找
   * @timeComplexity O(log N)
   * @spaceComplexity O(1)
   */
  function binarySearch(numbers, target, lower) {
    let left = 0;
    let right = numbers.length - 1;
    let n = numbers.length;

    while (left <= right) {
      const mid = Math.floor(((right - left) >> 1) + left);

      if (numbers[mid] > target || (lower && numbers[mid] >= target)) {
        right = mid - 1;
        n = mid;
      } else {
        left = mid + 1;
      }
    }

    return n;
  }

  let result = [-1, -1];

  const left = binarySearch(nums, target, true);
  const right = binarySearch(nums, target, false) - 1;

  if (
    left <= right &&
    right < nums.length &&
    nums[left] === target &&
    nums[right] === target
  ) {
    result = [left, right];
  }

  return result;
};

// @lc code=end
