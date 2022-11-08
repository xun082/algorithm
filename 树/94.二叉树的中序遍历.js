/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function (root) {
  /**
   * @author xun
   * @method 递归
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  // const result = [];
  // const inOrder = (root) => {
  //   if (!root) return;
  //   inOrder(root.left);
  //   result.push(root.val);
  //   inOrder(root.right);
  // };
  // inOrder(root);
  // return result;
  /**
   * @author xun
   * @method   迭代
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  // const result = [];
  // const stack = [];
  // while (root || stack.length) {
  //   while (root) {
  //     stack.push(root);
  //     root = root.left;
  //   }
  //   root = stack.pop();
  //   result.push(root.val);
  //   root = root.right;
  // }
  // return result;

  const result = [];
  let predecessor = null;

  while (root) {
    if (root.left) {
      // predecessor 节点就是当前 root 节点向左走一步，然后一直向右走至无法走为止
      predecessor = root.left;
      while (predecessor.right && predecessor.right !== root) {
        predecessor = predecessor.right;
      }

      // 让 predecessor 的右指针指向 root，继续遍历左子树
      if (!predecessor.right) {
        predecessor.right = root;
        root = root.left;
      }
      // 说明左子树已经访问完了，我们需要断开链接
      else {
        result.push(root.val);
        predecessor.right = null;
        root = root.right;
      }
    }
    // 如果没有左孩子，则直接访问右孩子
    else {
      result.push(root.val);
      root = root.right;
    }
  }

  return result;
};
// @lc code=end
