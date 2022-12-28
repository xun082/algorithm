/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 颠倒字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  /**
   * @author xun
   * @method 栈
   * @timeComplexity O(N)
   * @spaceComplexity O(N)
   */
  const stack = [];
  // 是否为单词
  let flag = false;
  let end = s.length;

  for (let i = end - 1; i >= 0; i--) {
    // 特殊处理 i===0 && s[0] !==' '这种情况
    if (i === 0 && s[0] !== " ") stack.push(s.slice(i, end));
    else {
      if (s[i] === " ") {
        if (flag) stack.push(s.slice(i + 1, end));
        flag = false;
        end = i;
      } else flag = true;
    }
  }
  return stack.join(" ");
};
// @lc code=end
