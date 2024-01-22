/*
 * @lc app=leetcode.cn id=670 lang=javascript
 *
 * [670] 最大交换
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  /**
   * @author xun
   * @method 贪心
   * @timeComplexity O(log num)
   * @spaceComplexity O(log num)
   */
  const nums = [...("" + num)];
  const n = nums.length;
  let maxIndex = n - 1;
  let index1 = -1;
  let index2 = -1;

  for (let i = maxIndex; i >= 0; i--) {
    if (nums[i] > nums[maxIndex]) {
      maxIndex = i;
    } else if (nums[i] < nums[maxIndex]) {
      index1 = i;
      index2 = maxIndex;
    }
  }

  if (index1 >= 0) {
    [nums[index1], nums[index2]] = [nums[index2], nums[index1]];
    return Number(nums.join(""));
  } else {
    return num;
  }
};
// @lc code=end
