/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  /**
   * @author xun
   * @method 哈希表
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  const seen = new Map();
  const repeat = new Set();

  let index = 0;

  function dfs(node) {
    if (!node) return 0;

    const tri = [node.val, dfs(node.left), dfs(node.right)];
    const hash = tri.toString();

    if (seen.has(hash)) {
      const pair = seen.get(hash);
      repeat.add(pair[0]);

      return pair[1];
    } else {
      seen.set(hash, [node, ++index]);
        return index;
        
    }
  }

  dfs(root);
  return [...repeat];
};
// @lc code=end
