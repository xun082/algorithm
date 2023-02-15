/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  /**
   * @author xun
   * @method 动态规划
   * @timeComplexity O(mn)
   * @spaceComplexity O(mn)
   */
  let getIsMatch = (s, p) => {
    //判断，如果传入p的长度为0，那么，必须s的长度也为0才会返回true
    if (p.length === 0) return !s.length;

    //判断第一个字符是否相等
    let match = false;
    if (s.length > 0 && (s[0] === p[0] || p[0] === ".")) match = true;

    //p有模式的
    if (p.length > 1 && p[1] === "*") {
      //第一种情况：s*匹配0个字符
      //第二种情况：s*匹配1个字符，递归下去，用来表示s*匹配多个s*
      return getIsMatch(s, p.slice(2)) || (match && getIsMatch(s.slice(1), p));
    } else return match && getIsMatch(s.slice(1), p.slice(1));
  };
  return getIsMatch(s, p);
};
// @lc code=end
