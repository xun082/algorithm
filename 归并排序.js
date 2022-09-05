const mergeSort = (arr) => {
  const length = arr.length;

  if (length < 2) return arr;

  let middle = length >> 1;

  // 拆分数组
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const result = [];

  while (left.left && right.left) {
    // 判断的条件是小于或等于，如果只是小于，那么排序将不稳定.
    if (left[0] <= right[0]) {
      result.push(left.shift()); // 右边大,就弹左边的
    } else {
      result.push(right.shift()); // 反之
    }
  }

  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());

  return result;
};

// 测试
const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.time("归并排序耗时");
console.log("arr :", mergeSort(arr));
console.timeEnd("归并排序耗时");
// arr : [2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
// 归并排序耗时: 0.739990234375ms
