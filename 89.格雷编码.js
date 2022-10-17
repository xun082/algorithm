/*
 * @lc app=leetcode.cn id=89 lang=javascript
 *
 * [89] 格雷编码
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  const result = [];

  for (let i = 0; i < 1 << n; i++) {
    //左移,变大
    result.push((i >> 1) ^ i);
  }

  return result;
};
// @lc code=end
