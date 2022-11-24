/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} rooroot1
 * @param {TreeNode} rooroot2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  /**
   * @author xun
   * @method 深度优先遍历
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  // function dfs(p, q) {
  //   if (!p) return q;
  //   if (!q) return p;
  //   p.val += q.val;
  //   p.left = dfs(p.left, q.left);
  //   p.right = dfs(p.right, q.right);
  //   return p;
  // }
  // return dfs(root1, root2);
  /**
   * @author xun
   * @method 广度优先遍历
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  //如果两方树有一个为null，直接返回另一个树
  if (root1 == null) return root2;
  if (root2 == null) return root1;

  let stack = [];
  stack.push([root1, root2]);
  while (stack.length) {
    t = stack.pop();
    if (t[0] == null || t[1] == null) continue;
    t[0].val += t[1].val;
    if (t[0].left == null) {
      t[0].left = t[1].left;
    } else {
      stack.push([t[0].left, t[1].left]);
    }
    if (t[0].right == null) {
      t[0].right = t[1].right;
    } else {
      stack.push([t[0].right, t[1].right]);
    }
  }
  return root1;
};
// @lc code=end
