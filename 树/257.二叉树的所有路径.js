/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  /**
   * @author xun
   * @method 深度优先
   * @timeComplexity O(N*N)
   * @spaceComplexity O(N*N)
   */
  const paths = [];

  function dfs(root, path) {
    if (root) {
      path += root.val.toString();

      if (root.left === null && root.right === null) {
        // 当前节点是叶子节点
        paths.push(path);
      } else {
        path += "->";
        dfs(root.left, path);
        dfs(root.right, path);
      }
    }
  }

  dfs(root, "");
  return paths;
};
// @lc code=end
