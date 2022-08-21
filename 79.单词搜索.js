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
  // 终止条件
  if (board.length === 0) {
    return false;
  }
  if (word.length === 0) {
    return true;
  }

  let row = board.length;
  let col = board[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      // 每一个字母都可以作为起点搜索
      // 0 就是当前查询的字母索引
      const ret = find(i, j, 0);
      if (ret) {
        return ret;
      }
    }
  }
  // 结束的时候还没找到
  return false;

  // 递归函数
  function find(i, j, current) {
    //   判断越界
    if (i >= row || i < 0) {
      return false;
    }
    if (j >= col || j < 0) {
      return false;
    }

    let letter = board[i][j];

    // 判断结果
    if (letter !== word[current]) {
      return false;
    }

    if (current === word.length - 1) {
      // 最后一个,也是匹配
      return true;
    }

    board[i][j] = null; //选择当前的字母

    //   进行下一步
    const ret =
      find(i + 1, j, current + 1) ||
      find(i - 1, j, current + 1) ||
      find(i, j - 1, current + 1) ||
      find(i, j + 1, current + 1);
    board[i][j] = letter;

    return ret;
  }
};
// @lc code=end
