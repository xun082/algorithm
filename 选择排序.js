// 二元选择排序
const sort = (array) => {
  for (let i = 0; i < array.length / 2; i++) {
    let maxIndex = i;
    let minIndex = i;

    for (let j = i + 1; j < array.length - i; j++) {
      // 获取到最小的值
      if (array[minIndex] > array[j]) minIndex = j;
      // 获取到最小的值
      if (array[maxIndex] < array[j]) maxIndex = j;
    }

    if (minIndex === maxIndex) break;
    [array[i], array[minIndex]] = [array[minIndex], array[i]];

    if (maxIndex === i) maxIndex = minIndex;

    const lastIndex = array.length - 1 - i;
    [array[maxIndex], array[lastIndex]] = [array[lastIndex], array[maxIndex]];
  }
  return array;
};

// 选择排序
const baseSort = (array) => {
  for (let i = 0; i < array.length / 2; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length - 1; j++) {
      if (array[j] < array[minIndex]) minIndex = j;
    }
    [array[j], array[minIndex]] = [array[minIndex], array[j]];
  }
  return array;
};

const array = [1, 3, 5, 6, 9, 8, 7, 10, 15];
console.time("s");
console.log(...sort(array));
console.timeEnd("s");
