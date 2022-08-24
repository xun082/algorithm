/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
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
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  const result = [];

  let first, second;

  function traverse(node) {
    if (node === null) return;

    traverse(node.left);
    result.push(node);
    traverse(node.right);
  }

  traverse(root);

  for (let i = 0; i < result.length - 1; i++) {
    if (result[i].val > result[i + 1].val) {
      // 找到两个值,移动位置
      if (!first) {
        // 第一次遇见
        first = result[i];
      }
      second = result[i + 1];
    }
  }
  let temp = first.val;
  first.val = second.val;
  second.val = temp;
  //   [first.val, second.val] = [second.val, first];
};
// @lc code=end
