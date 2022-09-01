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
  const result = [];
  const path = [];

  backtrack(0);

  return result;

  // 从哪切
  function backtrack(i) {
    if (i >= s.length) {
      result.push([...path]);
      return;
    }
    for (let j = i; j < s.length; j++) {
      //回文
      if (!isPalindrome(s, i, j)) {
        continue;
      }
      path.push(s.substr(i, j - i + 1));
      backtrack(j + 1);
      path.pop();
    }
  }
};
// @lc code=end
