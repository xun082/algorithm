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
  let dummy = new ListNode(0); // 创建一个哑节点作为链表的起始，简化边界条件处理
  dummy.next = head;

  let prefixSum = 0;
  let seen = new Map(); // 使用Map而不是对象，便于后续操作
  seen.set(0, dummy); // 初始化前缀和为0的情况

  // 第一次遍历：建立前缀和与节点的映射
  let node = dummy; // 初始化node为dummy
  while (node != null) {
    prefixSum += node.val;
    seen.set(prefixSum, node);
    node = node.next; // 移动到下一个节点
  }

  // 重置前缀和并重置node为dummy开始第二次遍历
  prefixSum = 0;
  node = dummy;

  // 第二次遍历：通过前缀和直接跳过和为零的子链表
  while (node != null) {
    prefixSum += node.val;
    node.next = seen.get(prefixSum).next; // 直接连接到最后一个具有相同前缀和的节点之后
    node = node.next; // 移动到下一个节点
  }

  return dummy.next;
};
// @lc code=end
