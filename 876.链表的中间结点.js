/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
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
var middleNode = function (head) {
  /**
   * @author xun
   * @method 数组
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  // let result = [head];
  // while (result[result.length - 1].next !== null) {
  //   result.push(result[result.length - 1].next);
  // }
  // return result[Math.trunc(result.length / 2)];
  /**
   * @author xun
   * @method 单指针
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  // let index = 0;
  // let current = head;
  // while (current !== null) {
  //   index++;
  //   current = current.next;
  // }
  // let k = 0;
  // current = head;
  // while (k < Math.trunc(index / 2)) {
  //   k++;
  //   current = current.next;
  // }
  // return current;
  /**
   * @author xun
   * @method 快慢指针
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
// @lc code=end
