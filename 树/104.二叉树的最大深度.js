/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function (root) {
  /**
   * @author xun
   * @method 深度优先
   * @timeComplexity O(N)
   * @spaceComplexity O(hight)
   */
  // if (root === null) return 0;
  // return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
  /**
   * @author xun
   * @method 广度优先遍历
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */

  if (root === null) return 0;

  const queue = [root];
  let depth = 0;

  while (queue.length !== 0) {
    depth++;
    let length = queue.length;

    while (length) {
      // 删除最前面的一个,并返回
      let node = queue.shift();

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      length--;
    }
  }

  return depth;
};
// @lc code=end
