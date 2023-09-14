/*
 * @lc app=leetcode.cn id=2487 lang=javascript
 *
 * [2487] 从链表中移除节点
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
var removeNodes = function (head) {
  const stack = [];
  let current = head;

  while (current) {
    const x = current.val;

    while (stack.length && stack[stack.length - 1] < x) {
      stack.pop();
    }
    stack.push(x);
    current = current.next;
  }

  const dummy = new ListNode(0);

  let node = dummy;

  for (const x of stack) {
    node.next = new ListNode(x);
    node = node.next;
  }

  return dummy.next;
};
// @lc code=end
