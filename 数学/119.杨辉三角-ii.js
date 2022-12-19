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
  /**
   * @author xun
   * @method 线性递推
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  const row = new Array(rowIndex + 1).fill(0);
  row[0] = 1;
  for (let i = 1; i <= rowIndex; i++) {
    row[i] = (row[i - 1] * (rowIndex - i + 1)) / i;
  }
  return row;
};
// @lc code=end
