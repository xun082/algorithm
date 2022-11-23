/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
 * @return {number[]}
 */
var largestValues = function (root) {
  /**
   * @author xun
   * @method 深度优先
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  // if (!root) return [];
  // const result = [];
  // function dfs(result, root, currentHeight) {
  //   if (currentHeight === result.length) {
  //     result.push(root.val);
  //   } else {
  //     // 新增一个元素
  //     result.splice(
  //       currentHeight,
  //       1,
  //       Math.max(result[currentHeight], root.val)
  //     );
  //   }
  //   if (root.left) {
  //     dfs(result, root.left, currentHeight + 1);
  //   }
  //   if (root.right) {
  //     dfs(result, root.right, currentHeight + 1);
  //   }
  // }
  // dfs(result, root, 0);
  // return result;
  /**
   * @author xun
   * @method 广度优先
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length) {
    let length = queue.length;

    let maxValue = -Number.MAX_VALUE;

    while (length > 0) {
      length--;
      const temp = queue.shift();
      maxValue = Math.max(maxValue, temp.val);

      if (temp.left) {
        queue.push(temp.left);
      }
      if (temp.right) {
        queue.push(temp.right);
      }
    }
    result.push(maxValue);
  }

  return result;
};
// @lc code=end
