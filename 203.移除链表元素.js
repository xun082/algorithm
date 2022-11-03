/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  /**
   * @author 递归
   */
  //   if (!head) return head;
  //   head.next = removeElements(head.next, val);
  //   return head.val === val ? head.next : head;
  /**
   * @author 哨兵元素
   */
  const element = {
    next: head,
  };

  let p = element;

  while (p.next) {
    if (p.next.val === val) { 
      p.next = p.next.next;
    } else {
      p = p.next;
    }
  }

  return element.next;
};
// @lc code=end
