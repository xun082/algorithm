/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  /**
   * @author xun
   * @method 栈
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  let sign = 1;
  let result = 0;

  const valueStack = [];
  const signStack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "+") sign = 1;
    else if (s[i] === "-") sign = -1;
    else if (s[i] === "(") {
      valueStack.push(result);
      signStack.push(sign);
      result = 0;
      sign = 1;
    } else if (s[i] === ")")
      result = result * signStack.pop() + valueStack.pop();
    else if (Number(s[i])) {
      let n = s[i];
      while (i + 1 && Number(s[i + 1])) n += s[i++ + 1];
      result += sign * +n;
    }
  }

  return result;
};
// @lc code=end
