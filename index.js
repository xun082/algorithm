/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let result = [];

  if (root === null) return result;

  let stack = [root];

  while (stack.length) {
    let current = stack.pop();

    result.push(current.val);

    //   栈结构
    current.right && stack.push(current.right);
    current.left && stack.push(current.left);
  }

  return result;

  // 递归方法
  //   let arr = [];

  //   function dfs(root) {
  //     if (root === null) {
  //       return;
  //     }
  //     arr.push(root.val);
  //     dfs(root.left);
  //     dfs(root.right);
  //   }
  //   dfs(root);

  //   return arr;
};
// @lc code=end
