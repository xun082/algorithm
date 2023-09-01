/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function (head) {
  /**
   * @author xun
   * @method 递归
   * @timeComplexity O(n)
   * @spaceComplexity O(n)
   */
  // if (head === null || head.next === null) return head;
  // const newHead = head.next;
  // head.next = swapPairs(newHead.next);
  // newHead.next = head;
  // return newHead;
  /**
   * @author xun
   * @method 迭代
   * @timeComplexity O(n)
   * @spaceComplexity O(1)
   */
  const dummy = new ListNode(0);
  dummy.next = head;
  let temp = dummy;

  while (temp.next !== null && temp.next.next !== null) {
    const node1 = temp.next;
    const node2 = temp.next.next;

    temp.next = node2;
    node1.next = node2.next;
    node2.next = node1;
    temp = node1;
  }

  return dummy.next;
};
// @lc code=end
