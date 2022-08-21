/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// [0,1,0,3,12]
// [1,3,12,0,0]
var moveZeroes = function (nums) {
  if (nums === null) return;

  // 第一次遍历的时候,j指针记录非零的个数,只要是非零的统统赋值给nums[j]
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j++] = nums[i];
    }
  }

  //非0元素统计完了，剩下的都是0了
  //所以第二次遍历把末尾的元素都赋为0即可
  for (let i = j; i < nums.length; i++) {
    nums[i] = 0;
  }
};
// @lc code=end
