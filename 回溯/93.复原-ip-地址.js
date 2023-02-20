/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
const restoreIpAddresses = (s) => {
  /**
   * @author xun
   * @method 回溯
   * @timeComplexity O(3**SEG_COUNT ×∣s∣)
   * @spaceComplexity O(SEG_COUNT)
   */
  const SEG_COUNT = 4;
  const segments = new Array(SEG_COUNT);
  const ans = [];

  function dfs(s, segId, segStatrt) {
    if (segId === SEG_COUNT) {
      if (segStatrt === s.length) ans.push(segments.join("."));
      return;
    }

    // 如果还没有找到 4 段 IP 地址就已经遍历完了字符串，那么提前回溯
    if (segStatrt === s.length) return;

    if (s.charAt(segStatrt) === "0") {
      segments[segId] = 0;
      dfs(s, segId + 1, segStatrt + 1);
    }

    let addr = 0;
    for (let segEnd = segStatrt; segEnd < s.length; ++segEnd) {
      addr = addr * 10 + (s.charAt(segEnd) - "0");

      if (addr > 0 && addr <= 0xff) {
        segments[segId] = addr;
        dfs(s, segId + 1, segEnd + 1);
      } else {
        break;
      }
    }
  }
  dfs(s, 0, 0);

  return ans;
};

// @lc code=end
