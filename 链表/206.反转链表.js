/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  /**
   * @author xun
   * @method  迭代
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  // let previous = null;
  // let current = head;
  // while (current) {
  //   const next = current.next;
  //   current.next = previous;
  //   previous = current;
  //   current = next;
  // }
  // return previous;
  /**
   * @author xun
   * @method 递归
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */

  if (head === null || head.next === null) return head;

  const newHead = reverseList(head.next);

  head.next.next = head;
  head.next = null;

  return newHead;
};
// @lc code=end
