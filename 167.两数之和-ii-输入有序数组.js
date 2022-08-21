/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  // 如果两个指针指向元素的和 sum == targetsum==target，那么得到要求的结果；
  // 如果 sum > targetsum>target，移动较大的元素，使 sumsum 变小一些；
  // 如果 sum < targetsum<target，移动较小的元素，使 sumsum 变大一些。

  if (numbers === null) return null;
  let i = 0;
  let length = numbers.length - 1;
  while (i < length) {
    let sum = numbers[i] + numbers[length];
    if (sum === target) {
      return [i + 1, length + 1]; //数组从1开始,所以要加1
    } else if (sum < target) {
      i++; //头指针相加
    } else {
      length--; //尾指针向前移
    }
  }
  return null;
};
// @lc code=end
