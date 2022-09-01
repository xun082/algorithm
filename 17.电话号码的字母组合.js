/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */

var letterCombinations = function (digits) {
  let length = digits.length;

  const array = [
    "",
    "",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];

  if (!length) return [];
  if (length === 1) return array[digits].split("");

  const result = [];
  const path = [];

  backtrack(digits, length, 0);

  function backtrack(digits, l, i) {
    if (path.length === l) {
      result.push(path.join(""));

      return;
    }

    for (const v of array[digits[i]]) {
      path.push(v);
      backtrack(digits, l, i + 1);
      path.pop();
    }
  }

  return result;
};
// @lc code=end
