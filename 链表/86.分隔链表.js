/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  /**
   * @author xun
   * @method 模拟
   * @timeComplexity O(n)
   * @spaceComplexity O(1)
   */
  if (!head || !head.next) return head;

  // 维护两个链表 small 和large
  let small = new ListNode(0);
  const smallHead = small;

  let large = new ListNode(0);
  const largeHead = large;

  // small 链表按顺序存储所有小于 xx 的节点，
  // large 链表按顺序存储所有大于等于 xx 的节点
  // 遍历完原链表后，我们只要将small 链表尾节点指向large 链表的头节点即能完成对链表的分隔。
  while (head !== null) {
    if (head.val < x) {
      small.next = head;
      small = small.next;
    } else {
      large.next = head;
      large = large.next;
    }
    head = head.next;
  }

  large.next = null;
  small.next = largeHead.next; // 链表合并

  // 有哨兵
  return smallHead.next;
};
// @lc code=end
