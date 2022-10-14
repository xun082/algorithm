/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const result = [];

  for (let i = 0; i <= rowIndex + 1; i++) {
    result[i - 1] = 1;
    for (let j = i - 2; j > 0; j--) {
      result[j] = result[j - 1] + result[j];
    }
  }

  return result;
};
// @lc code=end
