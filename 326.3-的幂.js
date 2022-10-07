/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3 的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  const str = n.toString(3);

  if (str[0] !== "1") return false;
  for (let i = 1; i < str.length; i++) {
    if (str[i] !== "0") return false;
  }

  return true;
};

// @lc code=end
