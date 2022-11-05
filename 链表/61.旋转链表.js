/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  /**
   * @author xun
   * @method 闭合为环
   * @timeComplexity O(n)
   * @spaceComplexity O(1)
   */

  // 边界条件
  if (k === 0 || head === null || head.next === null) {
    return head;
  }

  let n = 1; // 通过遍历知道链表的长度

  let current = head;
  while (current.next) {
    current = current.next;
    n++;
  }

  let add = n - (k % n);

  if (add === n) {
    // 如果要移动的次数和链表的长度相同则直接返回
    return head;
  }

  current.next = head;

  while (add) {
    current = current.next;
    add--;
  }

  const result = current.next; // 维护一个变量,最终返回
  current.next = null;

  return result;
};
// @lc code=end
