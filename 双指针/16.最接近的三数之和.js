/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  /**
   * @author xun
   * @method 排序+双指针
   * @timeComplexity O(N*N)
   * @spaceComplexity O(log N)
   */
  nums.sort((a, b) => a - b);
  const length = nums.length;

  if (length < 3) return;

  let min = +Infinity;
  let sum = 0;

  for (let i = 0; i < length - 2; i++) {
    let n1 = nums[i];
    let left = i + 1;
    let right = length - 1;

    while (left < right) {
      let n2 = nums[left];
      let n3 = nums[right];
      let result = n1 + n2 + n3 - target; //差值
      if (min > Math.abs(result)) {
        min = Math.abs(result);
        sum = n1 + n2 + n3;
      }

      if (result >= 0) right--;
      else left++;
    }
  }

  return sum;
};
// @lc code=end
