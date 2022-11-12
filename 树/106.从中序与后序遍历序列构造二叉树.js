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
  /**
   * @author xun
   * @method 递归
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  const map = new Map();

  // postorder 为后续遍历的结果

  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }

  function helper(inStart, inEnd, postStart, postEnd) {
    if (inStart > inEnd) return null;

    let rootVal = postorder[postEnd];

    const node = new TreeNode(rootVal);

    // 找到根节点的鞋标
    let index = map.get(rootVal);

    let leftNUm = index - inStart;

    node.left = helper(
      inStart,
      inStart + leftNUm - 1,
      postStart,
      postStart + leftNUm - 1
    );

    node.right = helper(index + 1, inEnd, postStart + leftNUm, postEnd - 1);

    return node;
  }

  return helper(0, inorder.length - 1, 0, postorder.length - 1);
};

// @lc code=end
