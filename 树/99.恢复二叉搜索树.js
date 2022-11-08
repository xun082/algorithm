/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  // let previous = new TreeNode(-Infinity);
  // let left = new TreeNode(-Infinity);
  // let right = new TreeNode(-Infinity);
  // const inOrder = (root) => {
  //   if (!root) return true;
  //   inOrder(root.left);
  //   if (previous.val > root.val) {
  //     if (left.val === -Infinity) {
  //       left = previous;
  //     }
  //     if (left.val >= -Infinity) {
  //       right = root;
  //     }
  //   }
  //   previous = root;
  //   inOrder(root.right);
  // };
  // inOrder(root);
  // [left.val, right.val] = [right.val, left.val];
  /**
   * @author xun
   * @method Morris 中序遍历
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */

  // https://leetcode.cn/problems/recover-binary-search-tree/solution/hui-fu-er-cha-sou-suo-shu-by-leetcode-solution/

  let x = null,
    y = null,
    pred = null,
    predecessor = null;

  while (root !== null) {
    if (root.left !== null) {
      // predecessor 节点就是当前 root 节点向左走一步，然后一直向右走至无法走为止
      predecessor = root.left;
      while (predecessor.right !== null && predecessor.right !== root)
        predecessor = predecessor.right;

      // 让 predecessor 的右指针指向 root，继续遍历左子树
      if (predecessor.right === null) {
        predecessor.right = root;
        root = root.left;
      }
      // 说明左子树已经访问完了，我们需要断开链接
      else {
        if (pred !== null && root.val < pred.val) {
          y = root;
          if (x === null) {
            x = pred;
          }
        }
        pred = root;

        predecessor.right = null;
        root = root.right;
      }
    }
    // 如果没有左孩子，则直接访问右孩子
    else {
      if (pred !== null && root.val < pred.val) {
        y = root;
        if (x === null) {
          x = pred;
        }
      }
      pred = root;

      root = root.right;
    }
  }
  swap(x, y);
};
const swap = (x, y) => {
  const temp = x.val;
  x.val = y.val;
  y.val = temp;
};

// @lc code=end
