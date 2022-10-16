/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();

  nums.map((item) => {
    if (map.has(item)) map.set(item, map.get(item) + 1);
    else map.set(item, 1);
  });

  // 如果元素数量小于等于k -> 直接返回字典key整数
  if (map.size <= k) {
    return [...map.keys()];
  }

  // 返回桶排序
  return bucketSort(map, k);
};

const bucketSort = (map, k) => {
  const array = [];
  const result = [];

  map.forEach((value, key) => {
    // 利用映射关系(出现频率作为下标)将数据分配到各个桶中
    if (!array[value]) {
      array[value] = [key];
    } else {
      array[value].push(key);
    }
  });
  // 倒序遍历获取出现频率最大的前k个数且result数组小于k
  for (let i = array.length - 1; i >= 0 && result.length < k; i--) {
    if (array[i]) {
      result.push(...array[i]);
    }
  }

  return result;
};
// @lc code=end
