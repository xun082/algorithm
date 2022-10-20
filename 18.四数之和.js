/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  let len = nums.length;
  // 因为要找4个数，nums<4当然就不可能有结果了
  if (len < 4) {
    return [];
  }
  // 排序，方便控制指针该左移还是右移
  nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < len - 3; i++) {
    // i 为第一个固定的位置，也是最小值的位置，为了保证4个数要求所以 i<len-3
    // 排除重复值
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    // 四个相对最小值都比target大，则后续的值也比target大，可以跳出循环了
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;
    // 当前值加上最大的三个值比target小，则可以直接跳过i使用i+1的值进行比较
    if (nums[i] + nums[len - 1] + nums[len - 2] + nums[len - 3] < target)
      continue;
    for (let j = i + 1; j < len - 2; j++) {
      // j 为第二个固定的位置，也是第二小的值，为了保证4个数要求所以 j<len-2
      // 排除重复值
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }
      // 排除不可能的情况
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break;
      if (nums[i] + nums[j] + nums[len - 1] + nums[len - 2] < target) continue;
      // 在前面两个位置固定的情况下，使用双指针找剩下的两个值
      let L = j + 1,
        R = len - 1;
      while (L < R) {
        let sum = nums[i] + nums[j] + nums[L] + nums[R];
        if (sum === target) {
          res.push([nums[i], nums[j], nums[L], nums[R]]);
          // 跳过重复的值
          while (L < R && nums[L] === nums[L + 1]) {
            L++;
          }
          // 跳过重复的值
          while (L < R && nums[R] === nums[R - 1]) {
            R--;
          }
          // 向内移动，寻找下一个值
          L++;
          R--;
        } else if (sum > target) {
          while (L < R) {
            // 移动右指针，并跳过重复项
            if (nums[R] !== nums[--R]) break;
          }
        } else {
          while (L < R) {
            // 移动左指针，并跳过重复项
            if (nums[L] !== nums[++L]) break;
          }
        }
      }
    }
  }
  return res;
};

// @lc code=end
