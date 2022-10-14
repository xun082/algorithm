/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return [];

  if (!root.left && !root.right) return [[root.val]];

  let path = [root];
  const result = [];
  let reverse = false;

  while (path.length) {
    let length = path.length;
    const temp = [];
    const currentLevel = [];
    while (length) {
      // path中的length个结点全是同一层的，取出前length个节点，下一层节点放curLevel最后赋给path
      let current = path.pop();
      temp.push(current.val);

      if (reverse) {
        // 当前层是逆序遍历，子节点作为下一层的节点也逆序遍历存储，那么下一层pop()的顺序就是正序遍历
        if (current.right) currentLevel.push(current.right);
        if (current.left) currentLevel.push(current.left);
      } else {
        //当前层是正序遍历，子节点作为下一层的节点也正序遍历存储，那么下一层的pop()的顺序就是逆序遍历
        if (current.left) currentLevel.push(current.left);
        if (current.right) currentLevel.push(current.right);
      }
      length--;
    }
    path = currentLevel;
    result.push(temp);
    reverse = !reverse;
  }

  return result;
};
// @lc code=end
