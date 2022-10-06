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
  //   if (!head) return head;
  //   // 头节点为0
  //   const dummy = new ListNode(0, head);
  //   let current = dummy;
  //   while (current.next && current.next.next) {
  //     if (current.next.val === current.next.next.val) {
  //       const x = current.next.val;
  //       while (current.next && current.next.val === x) {
  //         current.next = current.next.next;
  //       }
  //     } else {
  //       current = current.next;
  //     }
  //   }
  //   // 当返回时需要指向下一个
  //   return dummy.next;

  // 递归
  if (head === null || head.next === null) return head;

  if (head.val === head.next.val) {
    while (head.next !== null && head.val === head.next.val) {
      head = head.next;
    }
    return deleteDuplicates(head.next);
  } else {
    head.next = deleteDuplicates(head.next);
    return head;
  }
};
// @lc code=end
