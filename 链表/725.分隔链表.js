/*
 * @lc app=leetcode.cn id=725 lang=javascript
 *
 * [725] 分隔链表
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
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
  /**
   * @author xun
   * @method 拆分链表
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */

  let n = 0;
  let temp = head;
  while (temp !== null) {
    n++;
    temp = temp.next;
  }

  let quotient = Math.floor(n / k);
  let remainder = n % k;

  const result = new Array(k).fill(null);
  let current = head;
  for (let i = 0; i < k && current !== null; i++) {
    result[i] = current;
    let partSize = quotient + (i < remainder ? 1 : 0);
    for (let j = 1; j < partSize; j++) {
      current = current.next;
    }

    const next = current.next;
    current.next = null;
    current = next;
  }

  return result;
};
// @lc code=end
