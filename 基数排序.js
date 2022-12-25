function radixSort(arr) {
  //定义一个二维数组，表示10个桶，每个桶就是一个一维数组
  //说明
  //1，二维数组包含10个一维数组，
  //2.为了防止在放入数的时候，数据溢出，则每个一维数组（桶）
  //大小定为arr.length
  //3.很明确，基数排序是使用空间换时间的经典算法
  let bucket = new Array(10);
  for (let i = 0; i < bucket.length; i++) {
    bucket[i] = new Array(arr.length);
  }

  //为了记录每个桶中，实际存了多少个数据，我们定义一个
  //一维数组来记录每个桶的每次放入的数据个数
  //可以这里理解
  //比如：bucketElementCounts[0],记录的就是bucket[0]桶的放入数据个数
  let buckeElementCounts = new Array(10).fill(0);

  //1.得到数组中最大的位数
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  //得到最大是几位数
  let maxLength = (max + "").length;

  for (let i = 0, n = 1; i < maxLength; i++, n = n * 10) {
    //每一轮，对每个元素的各个位数进行排序处理,
    //第一次是个位，第二次是十位，第三次是百位
    for (let j = 0; j < arr.length; j++) {
      //取出每个元素的各位的值
      let digitOfElement = Math.floor(arr[j] / n) % 10;
      bucket[digitOfElement][buckeElementCounts[digitOfElement]] = arr[j];
      buckeElementCounts[digitOfElement]++;
    }
    //按照这个桶的顺序（以为数组的下标依次取出数据，放入原来数组）
    let index = 0;
    //遍历每一桶，并将桶中的数据，放入原数组
    for (let k = 0; k < buckeElementCounts.length; k++) {
      //如果桶中有数据，我们才放入原数组
      if (buckeElementCounts[k] !== 0) {
        //循环该桶即第k个桶，即第k个一维数组，放入
        for (let l = 0; l < buckeElementCounts[k]; l++) {
          //取出元素放入arr
          arr[index] = bucket[k][l];
          //arr下标后移
          index++;
        }
        //每轮处理后，下标要清0
        buckeElementCounts[k] = 0;
      }
    }
  }
  return arr;
}

const array = [1, 20, 31, 58, 46, 5, 6, 7, 21, 32, 44, 59];
console.time("s");
console.log(...radixSort(array));
console.timeEnd("s");
