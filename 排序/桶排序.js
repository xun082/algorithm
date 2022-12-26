function bucketSort(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let bucketNum = parseInt((max - min) / arr.length) + 1;

  let bucketArr = new Array(bucketNum);
  for (var i = 0; i < bucketNum; i++) {
    bucketArr[i] = new Array();
  }

  for (var i of arr) {
    let num = parseInt((i - min) / arr.length);
    bucketArr[num].push(i);
  }
  for (var i of bucketArr) {
    i.sort();
  }
  let k = 0;
  for (var i = 0; i < bucketArr.length; i++) {
    for (var j = 0; j < bucketArr[i].length; j++) {
      arr[k++] = bucketArr[i][j];
    }
  }
  return arr;
}

const array = [1, 20, 31, 58, 46, 5, 6, 7, 21, 32, 44, 59];
console.time("s");
console.log(...bucketSort(array));
console.timeEnd("s");
