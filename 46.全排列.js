/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function (nums) {
  const result = [];
  const path = [];
  const used = new Array(nums.length).fill(false);

  function dfs() {
    if (path.length === nums.length) {
      // 递归的出口
      // 把path的一份拷贝加入到最后的结果中,然后返回
      result.push(path.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue; //如果之前已经出现过了,跳过
      path.push(nums[i]);
      used[i] = true; // 表示这个位置已经用过了
      dfs(); //递归
      // path保证每次获取到正确的结果之后都为空
      path.pop(); // 回溯的过程中，将当前的节点从 path 中删除
      used[i] = false;
    }
  }

  dfs();

  return result;
};
// @lc code=end
