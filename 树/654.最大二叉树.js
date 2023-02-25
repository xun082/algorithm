/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  /**
   * @author xun
   * @method 单调栈
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  const length = nums.length;
  const stack = [];

  const tree = new Array(length).fill(0);

  for (let i = 0; i < length; i++) {
    tree[i] = new TreeNode(nums[i]);
    while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
      tree[i].left = tree[stack[stack.length - 1]];
      stack.pop();
    }

    if (stack.length) tree[stack[stack.length - 1]].right = tree[i];

    stack.push(i);
  }

  return tree[stack[0]];
};
// @lc code=end
