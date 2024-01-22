/*
 * @lc app=leetcode.cn id=402 lang=javascript
 *
 * [402] 移掉 K 位数字
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  /**
   * @author xun
   * @method 贪心 + 单调栈
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  const stack = [];

  for (const digit of num) {
    while (stack.length > 0 && stack[stack.length - 1] > digit && k) {
      stack.pop();
      k -= 1;
    }
    stack.push(digit);
  }

  for (; k > 0; k--) {
    stack.pop();
  }

  let ans = "";
  let isLeadingZero = 0;

  for (const digit of stack) {
    if (isLeadingZero && digit === "0") {
      continue;
    }
    isLeadingZero = false;
    ans += digit;
  }

  return ans === "" ? "0" : ans;
};
// @lc code=end
