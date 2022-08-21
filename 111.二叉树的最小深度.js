/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
var minDepth = function (root) {
  // 递归方法
  //   if (root === null) return 0;
  //   if (root.left === null && root.right === null) {
  //     return 1;
  //   }
  //   if (root.left === null) {
  //     return 1 + minDepth(root.right);
  //   }
  //   if (root.right === null) {
  //     return 1 + minDepth(root.left);
  //   }
  //   return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
  // 迭代
  if (root === null) {
    return 0;
  }

  const stack = [root];

  let index = 0;

  while (true) {
    let size = stack.length;
    index++;
    while (size--) {
      let node = stack.shift();

      if (node.left === null && node.right === null) {
        return index;
      }
      node.left && stack.push(node.left);
      node.right && stack.push(node.right);
    }
  }
};
// @lc code=end
