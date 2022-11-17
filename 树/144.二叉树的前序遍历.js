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
  /**
   * @author xun
   * @method 广度优先
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  // const result = [];
  // if (root === null) return result;
  // const stack = [root];
  // while (stack.length) {
  //   const current = stack.pop();
  //   result.push(current.val);
  //   current.right && stack.push(current.right);
  //   current.left && stack.push(current.left);
  // }
  // return result;
  /**
   * @author xun
   * @method 深度优先
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  // const result = [];
  // function dfs(root) {
  //   if (root === null) return result;
  //   result.push(root.val);
  //   dfs(root.left);
  //   dfs(root.right);
  // }
  // dfs(root);
  // return result;
  /**
   * @author xun
   * @method Morris 遍历
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  const result = [];

  if (root === null) return result;

  let previous = null;

  while (root !== null) {
    previous = root.left;
    if (previous !== null) {
      while (previous.right !== null && previous.right !== root) {
        previous = previous.right;
      }
      if (previous.right === null) {
        previous.right = root;
        result.push(root.val);
        root = root.left;
        continue;
      } else {
        previous.right = null;
      }
    } else {
      result.push(root.val);
    }
    root = root.right;
  }
  return result;
};
// @lc code=end
