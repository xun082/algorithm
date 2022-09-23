/*
 * @lc app=leetcode.cn id=419 lang=javascript
 *
 * [419] 甲板上的战舰
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board) {
  let count = 0;

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === "X") {
        if (row > 0 && board[row - 1][col] === "X") {
          continue;
        }
        if (col > 0 && board[row][col - 1] === "X") {
          continue;
        }
        count++;
        // sink(row, col);
      }
    }
  }

  //   进阶不需要
  //   function sink(row, col) {
  //     if (
  //       row < 0 ||
  //       row >= board.length ||
  //       col < 0 ||
  //       col >= board[0].length ||
  //       board[row][col] == "."
  //     ) {
  //       return;
  //     }
  //     //下沉
  //     board[row][col] = ".";
  //     //向四周扩散
  //     sink(row + 1, col);
  //     sink(row - 1, col);
  //     sink(row, col + 1);
  //     sink(row, col - 1);
  //   }

  return count;
};
// @lc code=end
