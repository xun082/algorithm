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
  // //1：这种情况不可能有相同节点，直接返回
  // if (head == null || head.next == null) {
  //   return head;
  // }
  // // 当前节点与下个节点一样
  // if (head.val === head.next.val) {
  //   //   将当前节点的下个节点跳过，指向递下下个归后的结果
  //   head.next = deleteDuplicates(head.next.next);
  //   //   为了防止删除了下个节点，与下下个节点还是一样，
  //   //   继续递归，如[1, 1, 1]这种情况，跳过了第二个节点，还剩下[1, 1]
  //   return deleteDuplicates(head);
  // }
  // // 当前节点与下个节点不一样，继续递归下个节点，递归函数继续判断是否与下下个节点一样
  // deleteDuplicates(head.next);
  let current = head;

  while (current !== null && current.next !== null) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
};
// @lc code=end
