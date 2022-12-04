/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  /**
   * @author xun
   * @method 双指针
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  let first = 0;
  let last = s.length - 1;

  while (first < last) {
    [s[first], s[last]] = [s[last], s[first]];
    first++;
    last--;
  }
};
// @lc code=end
