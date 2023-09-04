/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
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
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  /**
   * @author xun
   * @method 递归
   * @timeComplexity
   * @spaceComplexity
   */
  // function traverse(head, tail) {
  //   if (head === tail) return null;
  //   let slow = (fast = head);
  //   while (fast !== tail && fast.next !== tail) {
  //     fast = fast.next.next;
  //     slow = slow.next;
  //   }
  //   const root = new TreeNode(slow.val);
  //   root.left = traverse(head, slow);
  //   root.right = traverse(slow.next, tail);
  //   return root;
  // }
  // return traverse(head, null);
  /**
   * @author xun
   * @method  快慢指针
   * @timeComplexity O(n)
   * @spaceComplexity O(n)
   */

  const node = {
    left: null,
    right: null,
  };

  if (!head) return null;

  let slow = head;
  let fast = head;
  let last = head;

  while (fast && fast.next) {
    last = slow;

    slow = slow.next;
    fast = fast.next.next;
  }

  node.val = slow.val;

  if (last !== slow) {
    last.next = null;
    node.left = sortedListToBST(head);
  }

  node.right = sortedListToBST(slow.next);

  return node;
};
// @lc code=end
