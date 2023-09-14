/*
 * @lc app=leetcode.cn id=1367 lang=javascript
 *
 * [1367] 二叉树中的链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function (head, root) {
  /**
   * @author xun
   * @method 深度优先遍历
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  if (!head) return true;
  if (root === null) return false;

  function check(head, root) {
    if (head === null) return true;
    if (root === null) return false;

    return (
      head.val === root.val &&
      (check(head.next, root.left) || check(head.next, root.right))
    );
  }

  if (head.val === root.val && check(head, root)) return true;

  return isSubPath(head, root.left) || isSubPath(head, root.right);
};
// @lc code=end
