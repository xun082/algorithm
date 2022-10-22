/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // 保存 9行、9列、9块区域的 2进制值
  const row = new Array(9);
  const col = new Array(9);
  const area = new Array(9);

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let num = board[i][j];

      if (num == ".") continue;
      num = Number(num);
      let idx = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      // 当前行，判断当前元素是否已经存在过
      // 当前列，判断当前元素是否已经存在过
      // 当前区域，判断当前元素是否已经存在过
      if (
        ((row[i] >> num) & 1) == 1 ||
        ((col[j] >> num) & 1) == 1 ||
        ((area[idx] >> num) & 1) == 1
      ) {
        return false;
      }

      Number(row[i]).toString(2);
      Number(1 << num).toString(2);

      // 不断更新 每一行、每一列、每一区域 的标记
      row[i] |= 1 << num;
      col[j] |= 1 << num;
      area[idx] |= 1 << num;
    }
  }
  return true;
};
// @lc code=end
