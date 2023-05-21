/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  /**
   * @author xun
   * @method 字符串
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return (
        isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1)
      );
    }
    left++;
    right--;
  }

  return true;
};

function isPalindrome(s, left, right) {
  while (left < right) {
    // 给你一次机会了,你不中用啊
    if (s[left] !== s[right]) return false;

    left++;
    right--;
  }
  return true;
}
// @lc code=end
