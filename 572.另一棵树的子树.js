/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一棵树的子树
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  // 不停的比较,某一个子树,是否和subRoot一样
  if (root === null) {
    return false;
  }

  if (root.val === subRoot.val) {
    if (isSameTree(root, subRoot)) {
      return true;
    }
  }

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

// 判断是否相同的树 100题
var isSameTree = function (p, q) {
  if (p === null && q === null) return true;

  // 深度优先
  return (
    q !== null &&
    p !== null &&
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
};
// @lc code=end
