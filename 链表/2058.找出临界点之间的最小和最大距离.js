/*
 * @lc app=leetcode.cn id=2058 lang=javascript
 *
 * [2058] 找出临界点之间的最小和最大距离
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
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function (head) {
  let minDist = -1;
  let maxDist = -1;
  let first = -1;
  let last = -1;
  let pos = 0;

  let current = head;

  while (
    current !== null &&
    current.next !== null &&
    current.next.next !== null
  ) {
    let x = current.val;
    let y = current.next.val;
    let z = current.next.next.val;

    if (y > Math.max(x, z) || y < Math.min(x, z)) {
      if (last !== -1) {
        minDist = minDist === -1 ? pos - last : Math.min(minDist, pos - last);
        maxDist = Math.max(maxDist, pos - first);
      }

      if (first === -1) {
        first = pos;
      }
      last = pos;
    }
    current = current.next;
    pos += 1;
  }

  return [minDist, maxDist];
};
// @lc code=end
