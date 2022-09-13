/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  // postorder 是同一棵树的后序遍历
  if (postorder.length == 0) {
    return null;
  }

  const root = new TreeNode(postorder[postorder.length - 1]);
  const stack = [];
  stack.push(root);

  let inorderIndex = inorder.length - 1;

  for (let i = postorder.length - 2; i >= 0; i--) {
    let postorderVal = postorder[i];
    let node = stack[stack.length - 1];
    if (node.val !== inorder[inorderIndex]) {
      node.right = new TreeNode(postorderVal);
      stack.push(node.right);
    } else {
      while (
        stack.length &&
        stack[stack.length - 1].val === inorder[inorderIndex]
      ) {
        node = stack.pop();
        inorderIndex--;
      }
      node.left = new TreeNode(postorderVal);
      stack.push(node.left);
    }
  }
  return root;
};

// @lc code=end
