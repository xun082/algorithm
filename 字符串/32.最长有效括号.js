/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  /**
   * @author xun
   * @method 栈
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  // if (s.length === 0) return 0;
  // const fillArr = new Array(s.length).fill(0);
  // const stack = [];
  // for (let i = 0; i < s.length; i++) {
  //   if (s[i] === "(") stack.push(i);
  //   else if (stack.length > 0) {
  //     fillArr[i] = 1;
  //     fillArr[stack.pop()] = 1;
  //   }
  // }
  // let count = 0;
  // let max = 0;
  // for (const v of fillArr) {
  //   if (v === 1) max = Math.max(++count, max);
  //   else count = 0;
  // }
  // return max;
  /**
   * @author xun
   * @method 不需要额外的空间
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  let left = 0;
  let right = 0;
  let maxLength = 0;
  let length = s.length;

  for (let i = 0; i < length; i++) {
    if (s[i] === "(") left++;
    else right++;

    if (left === right) maxLength = Math.max(maxLength, 2 * right);
    else if (right > left) left = right = 0;
  }

  left = right = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "(") left++;
    else right++;

    if (left === right) maxLength = Math.max(maxLength, 2 * left);
    else if (left > right) left = right = 0;
  }

  return maxLength;
};

// @lc code=end
