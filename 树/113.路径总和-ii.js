/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  /**
   * @author xun
   * @method 深度遍历
   * @timeComplexity O(N*N)
   * @spaceComplexity O(N)
   */
  // const array = [];
  // const path = [];
  // dfs(root, path, array, targetSum);
  // function dfs(root, path, array, sum) {
  //   if (!root) return;
  //   path.push(root.val);
  //   // 满足要求且该节点为叶子节点
  //   if (root.val === sum && root.left === null && root.right === null) {
  //     array.push([...path]);
  //   }
  //   dfs(root.left, path, array, sum - root.val);
  //   dfs(root.right, path, array, sum - root.val);
  //   path.pop();
  // }
  // return array;
  /**
   * @author xun
   * @method 剪枝+回溯
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  const result = [];
  const path = [];

  function getPath(root, targetSum) {
    if (!root) return;

    // 第一次剪枝
    const checkValFlag =
      root.val <= targetSum ||
      Math.abs(root.val) ||
      root.left !== null ||
      root.right !== null;

    if (checkValFlag) {
      path.push(root.val);
      targetSum -= root.val;
    } else {
      //无法继续往下搜索
      return;
    }

    // 第二次剪枝
    if (targetSum === 0 && root.left === null && root.right == null) {
      result.push([...path]);
      path.pop();
      return;
    }

    // 第三次剪枝
    if (root.left !== null) {
      getPath(root.left, targetSum);
    }

    // 第四次剪枝
    if (root.right !== null) {
      getPath(root.right, targetSum);
    }

    path.pop();
  }

  getPath(root, targetSum);

  return result;
};

// @lc code=end
