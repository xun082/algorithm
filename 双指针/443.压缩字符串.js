/*
 * @lc app=leetcode.cn id=443 lang=javascript
 *
 * [443] 压缩字符串
 */

// @lc code=start
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  /**
   * @author xun
   * @method 双指针
   * @timeComplexity O(N)
   * @spaceComplexity O(1)
   */
  function reverse(chars, left, right) {
    while (left < right) {
      [chars[left], chars[right]] = [chars[right], chars[left]];
      left++;
      right--;
    }
  }

  const length = chars.length;
  let write = [];
  let left = 0;

  for (let read = 0; read < length; read++) {
    if (read === length - 1 || chars[read] !== chars[read + 1]) {
      chars[write++] = chars[read];

      let num = read - left + 1;
      if (num > 1) {
        const anchor = write;
        while (num > 0) {
          chars[write++] = String(num % 10);
          num = Math.floor(num / 10);
        }
        reverse(chars, anchor, write - 1);
      }
      left = read + 1;
    }
  }
  return write;
};

// @lc code=end
