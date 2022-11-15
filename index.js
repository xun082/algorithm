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
  // 深度优先
  //   const arr = [];
  //   const path = [];
  //   dfs(root, path, arr, targetSum);
  //   function dfs(root, path, arr, sum) {
  //     if (!root) return;
  //     path.push(root.val);
  //     if (root.val == sum && root.left == null && root.right == null) {
  // 满足要求且该节点为叶子节点
  //       arr.push([...path]);
  //     }
  //     dfs(root.left, path, arr, sum - root.val);
  //     dfs(root.right, path, arr, sum - root.val);
  //     path.pop();
  //   }
  //   return arr;

  const result = [];
  const path = [];

  function getPath(root, targetSum) {
    if (!root) return;

    //   第一次减枝
    let checkValFlag =
      root.val <= targetSum ||
      Math.abs(root.val) ||
      root.left != null ||
      root.right != null;

    if (checkValFlag) {
      path.push(root.val);
      targetSum -= root.val;
    } else {
      return; //无法继续往下搜索
    }
    // 2.第二次剪枝
    if (targetSum === 0 && root.left === null && root.right === null) {
      result.push([...path]);
      path.pop();
      return;
    }
    /// 3.第三次剪枝
    if (root.left !== null) {
      getPath(root.left, targetSum);
    }

    /// 3.第四次剪枝
    if (root.right !== null) {
      getPath(root.right, targetSum);
    }
    path.pop();
  }
  getPath(root, targetSum);

  return result;
};

// @lc code=end
