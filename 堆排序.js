const swap = (array, i, j) => {
  [array[i], array[j]] = [array[j], array[i]];
};

// 建堆
const createHeap = (array, i, length) => {
  let temp = array[i]; // 当前父节点
  // j < length 的目的是对结点 i 以下的结点全部做顺序调整
  for (let j = 2 * i + 1; j < length; j = 2 * j + 1) {
    temp = array[i]; // 将 array[i] 取出，整个过程相当于找到 array[i] 应处于的位置
    if (j + 1 < length && array[j] < array[j + 1]) {
      j++; // 找到两个孩子中较大的一个，再与父节点比较
    }
    if (temp < array[j]) {
      swap(array, i, j); // 如果父节点小于子节点:交换；否则跳出
      i = j; // 交换后，temp 的下标变为 j
    } else {
      break;
    }
  }
};

// 堆排序
const heapSort = (array) => {
  console.time("堆排序耗时");
  // 初始化大顶堆，从第一个非叶子结点开始
  for (let i = Math.floor(array.length / 2 - 1); i >= 0; i--) {
    createHeap(array, i, array.length);
  }
  // 排序，每一次 for 循环找出一个当前最大值，数组长度减一
  for (let i = Math.floor(array.length - 1); i > 0; i--) {
    // 根节点与最后一个节点交换
    swap(array, 0, i);
    // 从根节点开始调整，并且最后一个结点已经为当前最大值，不需要再参与比较，所以第三个参数为 i，即比较到最后一个结点前一个即可
    createHeap(array, 0, i);
  }
  console.timeEnd("堆排序耗时");
  return array;
};

const array = [2, 3, 5, 6, 9, 8, 7, 10];

console.log(heapSort(array));
