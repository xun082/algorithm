/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // 创建两个栈,把元素都推到栈里
  const stack1 = [];
  const stack2 = [];

  while (l1 !== null) {
    stack1.push(l1.val);
    l1 = l1.next;
  }

  while (l2 !== null) {
    stack2.push(l2.val);
    l2 = l2.next;
  }

  // 处理进位
  let carry = 0;
  let current = null;

  // 只要有一个不为空,还需要从栈里面取
  while (stack1.length !== 0 || stack2.length !== 0) {
    let sum = 0;
    if (stack1.length !== 0) {
      sum += stack1.pop();
    }

    if (stack2.length !== 0) {
      sum += stack2.pop();
    }

    sum += carry;

    const node = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);

    node.next = current;
    current = node;
  }

  // 需要进位
  if (carry !== 0) {
    const node = new ListNode(carry);
    node.next = current;
    current = node;
  }

  return current;
};
// @lc code=end
