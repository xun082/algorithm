/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";
  let length1 = num1.length;
  let length2 = num2.length;

  const result = new Array(length1 + length2).fill(0);
  // 结果最多为m+n整数
  for (let i = length1 - 1; i >= 0; i--) {
    for (let j = length2 - 1; j >= 0; j--) {
      // 从个位数开始
      const mul = num1[i] * num2[j];

      // 乘积在结果数组中对应的位置
      const p1 = i + j;
      const p2 = i + j + 1;

      const sum = mul + result[p2];
      result[p1] += Math.floor(sum / 10);
      result[p2] = sum % 10;
    }
  }

  if (result[0] === 0) result.shift();
  return result.join("");
};
// @lc code=end
