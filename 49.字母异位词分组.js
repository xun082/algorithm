/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  if (strs.length === 0) return [];

  const map = new Map();
  const result = [];

  for (const str of strs) {
    const characters = new Array(26).fill(0);

    for (let i = 0; i < str.length; i++) {
      const ascii = str.charCodeAt(i) - 97;
      characters[ascii]++;
    }
    const key = characters.join(",");
    if (map.has(key)) {
      map.set(key, [...map.get(key), str]);
    } else {
      map.set(key, [str]);
    }
  }

  for (const arr of map) {
    result.push(arr[1]); // 0是键,1是值
  }

  return result;
};
// @lc code=end
