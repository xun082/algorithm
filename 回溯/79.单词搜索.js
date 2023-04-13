/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  /**
   * @author xun
   * @method 回溯
   * @timeComplexity O(MN)
   * @spaceComplexity O(MN)
   */
  const h = board.length;
  const w = board[0].length;
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const visited = new Array(h).fill().map(() => new Array(w).fill(false));

  function check(i, j, s, k) {
    if (board[i][j] !== s.charAt(k)) return false;
    else if (k === s.length - 1) return true;

    visited[i][j] = true;
    let result = false;

    for (const [dx, dy] of directions) {
      let newI = i + dx;
      let newJ = j + dy;

      if (newI >= 0 && newI < h && newJ >= 0 && newJ < w) {
        if (!visited[newI][newJ]) {
          const flag = check(newI, newJ, s, k + 1);

          if (flag) {
            result = true;
            break;
          }
        }
      }
    }
    visited[i][j] = false;
    return result;
  }

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (check(i, j, word, 0)) return true;
    }
  }
  return false;
};
// @lc code=end
