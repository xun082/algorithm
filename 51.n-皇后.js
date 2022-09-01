/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const result = [];
  const path = [];

  backtrack(0, path);

  return result;

  function backtrack(row, temp) {
    if (row === n) {
      result.push(
        temp.map((c) => {
          const arr = new Array(n).fill(".");
          arr[c] = "Q";
          return arr.join("");
        })
      );
    }
    for (let col = 0; col < n; col++) {
      const canNOtSet = temp.some((c, r) => {
        return c === col || r - c === row - col || r + c === row + col;
      });

      if (canNOtSet) continue;

      backtrack(row + 1, [...temp, col]);
    }
  }
};
// @lc code=end
