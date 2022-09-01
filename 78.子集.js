/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];
  const path = [];

  backtrack(0);

  return result;

  function backtrack(index) {
    result.push([...path]);
    for (let i = index; i < nums.length; i++) {
      const num = nums[i];
      path.push(num);
      backtrack(i + 1); //找下一个数组
      path.pop();
    }
  }
};
// @lc code=end
