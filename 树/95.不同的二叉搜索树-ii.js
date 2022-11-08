/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  /**
   * @author xun
   * @method 回溯
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  if (n === 0) return [];

  return generateSearchTrees(1, n);
};

var generateSearchTrees = (start, end) => {
  if (start > end) {
    return [null];
  }

  const result = [];
  for (let i = start; i <= end; i++) {
    let left = generateSearchTrees(start, i - 1);
    let right = generateSearchTrees(i + 1, end);

    for (let l = 0; l < left.length; l++) {
      for (let r = 0; r < right.length; r++) {
        let currentRoot = new TreeNode(i, left[l], right[r]);
        result.push(currentRoot);
      }
    }
  }
  return result;
};
// @lc code=end
