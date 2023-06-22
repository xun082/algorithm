/*
 * @lc app=leetcode.cn id=1171 lang=javascript
 *
 * [1171] 从链表中删去总和值为零的连续节点
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
var removeZeroSumSublists = function (head) {
  /**
   * @author xun
   * @method 哈希表
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  let dummy = new ListNode(0);
  dummy.next = head;

  let seen = {};
  let prefix = 0;

  for (let node = dummy; node !== null; node = node.next) {
    prefix += node.val;
    seen[prefix] = node;
  }
  prefix = 0;

  for (let node = dummy; node !== null; node = node.next) {
    prefix += node.val;
    node.next = seen[prefix].next;
  }

  return dummy.next;
};
// @lc code=end
