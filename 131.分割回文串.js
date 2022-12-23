/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
function isPalindrome(s, l, r) {
  for (let i = l, j = r; i < j; i++, j--) {
    if (s[i] !== s[j]) return false;
  }
  return true;
}

var partition = function (s) {
  /**
   * @author xun
   * @method 回溯+动态规划预处理
   * @timeComplexity O(n*2**n)
   * @spaceComplexity O(N**2)
   */
  const length = s.length;
  const path = new Array(length)
    .fill(0)
    .map(() => new Array(length).fill(true));

  const result = [];
  const ans = [];

  for (let i = length - 1; i >= 0; i--) {
    for (let j = i + 1; j < length; j++) {
      path[i][j] = s[i] === s[j] && path[i + 1][j - 1];
    }
  }

  function dfs(x) {
    if (x === length) {
      result.push(ans.slice());
      return;
    }

    for (let y = x; y < length; y++) {
      if (path[x][y]) {
        ans.push(s.slice(x, y + 1));
        dfs(y + 1);
        ans.pop();
      }
    }
  }
  dfs(0);

  return result;
};
// @lc code=end
