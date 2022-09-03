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
  const result = [];
  // 复原从start开始的子串
  const dfs = (subRes, start) => {
    if (subRes.length == 4 && start == s.length) {
      // 片段满4段，且耗尽所有字符
      result.push(subRes.join(".")); // 拼成字符串，加入解集
      return; // 返不返回都行，指针已经到头了，严谨的说还是返回
    }
    if (subRes.length == 4 && start < s.length) {
      // 满4段，字符未耗尽，不用往下选了
      return;
    }
    for (let len = 1; len <= 3; len++) {
      // 枚举出选择，三种切割长度
      if (start + len - 1 >= s.length) return; // 加上要切的长度就越界，不能切这个长度
      if (len != 1 && s[start] == "0") return; // 不能切出'0x'、'0xx'

      const str = s.substring(start, start + len); // 当前选择切出的片段
      if (len == 3 && +str > 255) return; // 不能超过255

      subRes.push(str); // 作出选择，将片段加入subRes
      dfs(subRes, start + len); // 基于当前选择，继续选择，注意更新指针
      subRes.pop(); // 上面一句的递归分支结束，撤销最后的选择，进入下一轮迭代，考察下一个切割长度
    }
  };

  dfs([], 0); // dfs入口
  return result;
};

// @lc code=end
