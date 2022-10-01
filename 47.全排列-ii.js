/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const result = [];
  const path = [];
  const length = nums.length;

  nums.sort((a, b) => a - b);
  const used = new Array(length).fill(false);

  function dfs() {
    // 终止条件
    if (path.length === length) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < length; i++) {
      // 处理同一层,与前一个值相同，且前一个值已经取过了
      if (i > 0 && nums[i] === nums[i - 1] && used[i - 1] === false) {
        continue;
      }
      if (used[i]) {
        // 如果使用过
        continue;
      }
      path.push(nums[i]);
      // 用了之后设为true
      used[i] = true;
      dfs();
      // 用完之后设为false
      used[i] = false;
      path.pop();
    }
  }

  dfs();

  return result;
};
// @lc code=end
