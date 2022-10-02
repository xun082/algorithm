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
  if (nums.length <= 0) {
    //处理特殊情况
    return [-1, -1];
  }
  //数组的第一元素表示第一次出现，第二个表示第二次出现
  let result = [-1, -1]; //保存结果，初始化为[-1,-1]，表示不存在
  let index = binarySearch(nums, target); //二分查找，找出相等的某一个位置
  if (index !== -1) {
    //有相等元素，第一次出现的需要往前查找，最后一次出现的需要往后查找
    result[0] = index;
    result[1] = index;

    let left = index;
    let right = index;

    while (left >= 0) {
      //往左遍历
      if (target === nums[left]) {
        result[0] = left;
      } else {
        break;
      }
      left--;
    }
    while (right < nums.length) {
      //往右遍历
      if (target === nums[right]) {
        result[1] = right;
      } else {
        break;
      }
      right++;
    }
  }

  return result;
};

// 二分查找函数
function binarySearch(arr, target) {
  if (arr.length <= 0) {
    return -1;
  }
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor(((right - left) >> 1) + left);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

// @lc code=end
