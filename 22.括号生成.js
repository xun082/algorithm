/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  if (n === 0) return [];

  const result = [];

  const dfs = (left, right, str) => {
    // 终止条件:字符串构建完成，将字符串加入到解集中，终止当前递归分支
    if (str.length === 2 * n) {
      result.push(str);
      return;
    }

    // 选择左括号,只要 ( 有剩余就选
    if (left > 0) dfs(left - 1, right, str + "(");

    // 选择右括号，只有右括号的数量大于左括号，才能选
    if (left < right) dfs(left, right - 1, str + ")");
  };

  // 调用dfs,初始的左括号和右括号的数量都是n,字符串是空
  dfs(n, n, "");

  return result;
};
// @lc code=end
