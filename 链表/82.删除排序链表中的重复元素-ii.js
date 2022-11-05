/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
   * @method  递归
   * @timeComplexity
   * @spaceComplexity
   */
  //   if (head === null || head.next === null) return head;
  //   if (head.val === head.next.val) {
  //     while (head.next !== null && head.val === head.next.val) {
  //       head = head.next;
  //     }
  //     return deleteDuplicates(head.next);
  //   } else {
  //     // 直接递归,不做任何处理
  //     head.next = deleteDuplicates(head.next);
  //     return head;
  //   }
  /**
   * @author xun
   * @method 一次遍历
   * @timeComplexity O(n)
   * @spaceComplexity O(1)
   */
  if (!head) return head;
  const dummy = new ListNode(0, head);
  let current = dummy;
  while (current.next && current.next.next) {
    if (current.next.val === current.next.next.val) {
      const x = current.next.val;
      // 如果连续相同,遍历
      while (current.next && current.next.val === x) {
        current.next = current.next.next; //删除链表
      }
    } else {
      current = current.next;
    }
  }
  // 前面有一个哨兵节点
  return dummy.next;
};
// @lc code=end
