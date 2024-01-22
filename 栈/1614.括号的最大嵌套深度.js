/*
 * @lc app=leetcode.cn id=1614 lang=javascript
 *
 * [1614] 括号的最大嵌套深度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  /**
   * @author xun
   * @method 栈
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  let ans = 0;
  let size = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "(") {
      size++;

      ans = Math.max(ans, size);
    } else if (char === ")") {
      size--;
    }
  }

  return ans;
};
// @lc code=end
