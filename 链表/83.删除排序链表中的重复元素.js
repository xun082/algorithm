/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
var deleteDuplicates = function (head) {
  /**
   * @author xun
   * @method 递归
   * @timeComplexity
   * @spaceComplexity
   */
  // if (head == null || head.next == null) {
  //   return head;
  // }
  // head.next = deleteDuplicates(head.next);
  // if (head.val === head.next.val) head.next = head.next.next;
  // return head;
  /**
   * @author xun
   * @method 一次遍历
   * @timeComplexity O(n)
   * @spaceComplexity O(1)
   */
  if (head === null) return head;
  let current = head;
  while (current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
};
// @lc c\ode=end
