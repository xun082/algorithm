/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  //   const result = [];
  //   const dfs = (target, combine, idx) => {
  //     //   如果传入的下标和数组的长度相同,则返回
  //     if (idx === candidates.length) return;
  //     if (target === 0) {
  //       result.push(combine);
  //       return;
  //       }
  //     // 直接跳过
  //     dfs(target, combine, idx + 1);
  //     // 选择当前数
  //     if (target - candidates[idx] >= 0) {
  //       dfs(target - candidates[idx], [...combine, candidates[idx]], idx);
  //     }
  //     };
  //   dfs(target, [], 0);
  //   return result;
  // 排序的复杂度是n+lgn

  const result = [];
  const path = [];

  candidates.sort();
  backtrack(0, 0); //

  return result;

  function backtrack(index, sum) {
    if (sum > target) {
      return; //比target要大
    }

    if (sum === target) {
      result.push([...path]);
    }

    for (let j = index; j < candidates.length; j++) {
      const num = candidates[j];
      if (num + sum > target) {
        continue;
      }
      path.push(num);

      sum += num;
      backtrack(j, sum);
      path.pop();
      sum -= num;
    }
  }
};
// @lc code=end
