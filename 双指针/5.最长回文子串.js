/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  /**
   * @author xun
   * @method 双指针
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  const length = s.length;
  if (length < 2) return s;

  let max = "";

  for (let i = 0; i < length; i++) {
    helper(i, i);
    helper(i, i + 1);
  }

  function helper(left, right) {
    while (left >= 0 && right < length && s[left] === s[right]) {
      right++;
      left--;
    }
    const maxStr = s.slice(left + 1, right);

    if (maxStr.length > max.length) max = maxStr;
  }

  return max;
};
// @lc code=end
