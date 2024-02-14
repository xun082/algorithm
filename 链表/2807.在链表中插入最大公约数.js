/*
 * @lc app=leetcode.cn id=2807 lang=javascript
 *
 * [2807] 在链表中插入最大公约数
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
var insertGreatestCommonDivisors = function (head) {
  function commonMeasure(x, y) {
    return y === 0 ? x : commonMeasure(y, x % y);
  }

  let node = head;
  while (node.next !== null) {
    node.next = new ListNode(commonMeasure(node.val, node.next.val), node.next);
    node = node.next.next;
  }

  return head;
};
// @lc code=end
