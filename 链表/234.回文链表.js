/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  /**
   * @author xun
   * @method 快慢指针
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */

  // 链表翻转
  const reverseList = (head) => {
    let prev = null;
    let curr = head;
    while (curr !== null) {
      let nextTemp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextTemp;
    }
    return prev;
  };

  // 找出中间的链表节点
  const endOfFirstHalf = (head) => {
    let fast = head;
    let slow = head;
    while (fast.next !== null && fast.next.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
    }
    return slow;
  };

  if (head === null) return true;

  // 找到前半部分链表的尾结点并翻转后半部分
  const firstHalfEnd = endOfFirstHalf(head);
  const secondHalfStart = reverseList(firstHalfEnd.next);

  // 判断是否回文
  let p1 = head;
  let p2 = secondHalfStart;

  let result = true;

  while (result && p2 !== null) {
    if (p1.val !== p2.val) return false;
    p1 = p1.next;
    p2 = p2.next;
  }

  // 还原链表并返回结果
  firstHalfEnd.next = reverseList(secondHalfStart);
  return result;
};
// @lc code=end

const isPalindrome = function (head) {
  const values = [];

  while (head !== null) {
    values.push(head.val);
    head = head.next;
  }

  for (let i = 0, j = values.length - 1; i < j; i++, j--) {
    if (values[i] !== values[j]) {
      return false;
    }
  }

  return true;
};
