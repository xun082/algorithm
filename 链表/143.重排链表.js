/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  /**
   * @author xun
   * @method 双向队列
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  if (head === null) return head;
  const queue = [];
  let p = head;

  // 链表入队
  while (p) {
    queue.push(p);
    p = p.next;
  }

  while (queue.length > 2) {
    // 队头
    const head = queue.shift();
    // 队尾
    let tail = queue.pop();
    tail.next = head.next;
    head.next = tail;
  }
  queue[queue.length - 1].next = null;

  return head;
};
// @lc code=end
