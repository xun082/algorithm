/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    const map = {};
    let res = 0
    
    for (let i = 0; i < s.length; i++){
        map[s[i]]=(map[s[i]]||0)+1
    }

    for (const char in map) {
        if(map[char]%2===1)res++
    }

    return s.length-Math.max(0,res-1)
};
// @lc code=end
