/*
 * @lc app=leetcode.cn id=1290 lang=javascript
 *
 * [1290] 二进制链表转整数
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
 * @return {number}
 */
var getDecimalValue = function (head) {
  /**
   * @author xun
   * @method 模拟
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  let node = head;
  let ans = 0;

  while (node !== null) {
    ans = ans * 2 + node.val;
    node = node.next;
  }
  return ans;
};
// @lc code=end
