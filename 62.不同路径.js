/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  // m为宽,n为搞
  // 时间复杂度 o(m)
  //   let ans = 1;
  //   for (let x = n, y = 1; y < m; ++x, ++y) {
  //     ans = Math.floor((ans * x) / y);
  //   }
  //   return ans;
  // 时间复杂度o(mn)

  const array = new Array(m).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    array[i][0] = 1;
  }

  for (let j = 0; j < n; j++) {
    array[0][j] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      array[i][j] = array[i - 1][j] + array[i][j - 1];
    }
  }

  return array[m - 1][n - 1];
};
// @lc code=end
