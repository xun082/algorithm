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
  let write = 0; // 用于写入压缩结果的位置
  let i = 0; // 用于遍历数组的指针

  while (i < chars.length) {
    let j = i;
    // 计算相同字符的长度
    while (j < chars.length && chars[i] === chars[j]) {
      j++;
    }
    // 计算字符重复的次数
    const count = j - i;
    // 写入字符
    chars[write++] = chars[i];
    // 如果字符重复次数大于1，则写入重复次数
    if (count > 1) {
      for (const c of count.toString()) {
        chars[write++] = c;
      }
    }
    // 移动到下一个不同的字符
    i = j;
  }

  // 返回压缩后的长度
  return write;
};

// @lc code=end
