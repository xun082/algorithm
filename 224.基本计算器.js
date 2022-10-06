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
  const ops = [1];

  let sign = 1;
  let result = 0;
  const length = s.length;
  let i = 0;

  while (i < length) {
    if (s[i] === " ") {
      i++;
    } else if (s[i] === "+") {
      sign = ops[ops.length - 1];
      i++;
    } else if (s[i] === "-") {
      sign = -ops[ops.length - 1];
      i++;
    } else if (s[i] === "(") {
      ops.push(sign);
      i++;
    } else if (s[i] === ")") {
      ops.pop();
      i++;
    } else {
      let num = 0;
      while (i < length && !isNaN(Number(s[i])) && s[i] !== " ") {
        num = num * 10 + s[i].charCodeAt() - "0".charCodeAt();
        i++;
      }
      result += sign * num;
    }
  }

  return result;
};
// @lc code=end
