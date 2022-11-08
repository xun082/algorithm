/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  /**
   * @author xun
   * @method 递归
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  // function helper(root, lower, upper) {
  //   if (root === null) return true;
  //   if (root.val <= lower || root.val >= upper) return false;
  //   return (
  //     helper(root.left, lower, root.val) && helper(root.right, root.val, upper)
  //   );
  // }
  // return helper(root, -Infinity, Infinity);
  /**
   * @author xun
   * @method 中序遍历
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  const stack = [];
  let inOrder = -Infinity;
  while (stack.length | (root !== null)) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    // 如果中序遍历得到的节点的值小于等于前一个 inOrder，说明不是二叉搜索树
    if (root.val <= inOrder) {
      return false;
    }
    inOrder = root.val;
    root = root.right;
  }

  return true;
};
// @lc code=end
