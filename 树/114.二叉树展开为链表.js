/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  /**
   * @author xun
   * @method 前序遍历和展开同步进行
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  // if (root === null) return;
  // const stack = [root];
  // let previous = null;
  // while (stack.length) {
  //   const current = stack.pop();
  //   if (previous !== null) {
  //     previous.left = null;
  //     previous.right = current;
  //   }
  //   const left = current.left;
  //   const right = current.right;
  //   if (right !== null) {
  //     stack.push(right);
  //   }
  //   if (left !== null) {
  //     stack.push(left);
  //   }
  //   previous = current;
  // }
  /**
   * @author xun
   * @method 寻找前驱节点
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  let current = root;

  while (current !== null) {
    if (current.left !== null) {
      const next = current.left;
      let predecessor = next;

      // 左节点的最后一个右节点
      while (predecessor.right !== null) {
        predecessor = predecessor.right;
      }
      predecessor.right = current.right;

      current.left = null;

      current.right = next;
    }
    current = current.right;
  }
};
// @lc code=end
