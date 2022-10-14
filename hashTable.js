/**
 * 设计哈希函数，将传入的字符串哈希化，转换成 hashCode
 * @param string 要哈希化的字符串
 * @param limit 哈希表的最大个数（数组长度）
 * @returns {number} hashCode
 */
function hashFn(string, limit) {
  const PRIME = 23;

  let hashCode = 0;

  for (const item of string) {
    hashCode = PRIME * hashCode + item.charCodeAt();
  }

  return hashCode % limit;
}

/**
 * 判断一个数是否素数
 * @param number
 * @returns {boolean}
 */
function isPrime(number) {
  if (number <= 1 || number === 4) return false;

  const temp = Math.ceil(sqrt(number));

  for (let index = 2; index < temp; index++) {
    if (number % i === 0) return false;
  }
  return true;
}

class HashTable {
  constructor() {
    this.storage = [];
    this.count = 0; // 当前存放的元素个数
    this.limit = 7; // 哈希表长度（初始设为质数 7）

    // 装填因子(已有个数/总个数)
    this.loadFactor = 0.75;
    this.minLoadFactor = 0.25;
  }

  getPrime(number) {
    while (!isPrime(number)) {
      number++;
    }
    return number;
  }

  // 添加
  put(key, value) {
    // 1、根据 key 获取要映射到 storage 里面的 index（通过哈希函数获取）
    const index = hashFn(key, this.limit);

    // 2、根据index 取出对于的bucket
    let bucket = this.storage[index];

    // 3、判断是否存在 bucket
    if (bucket === undefined) {
      bucket = []; //不存在则创建
      this.storage[index] = bucket;
    }

    // 4、判断是否插入数据操作还是修改操作
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i]; // tuple 的格式：[key, value]
      // 如果 key 相等，则修改数据
      if (tuple[0] === key) {
        tuple[1] = value;
        return; // 修改完 tuple 里数据，return 终止，不再往下执行。
      }
    }

    bucket.push([key, value]);
    this.count++;

    // 判断哈希表是否要扩容，若装填因子 > 0.75，则扩容
    if (this.count / this.limit > this.loadFactor) {
      this.resize(this.getPrime(this.limit * 2));
    }
  }

  // 根据key  获取value
  get(key) {
    const index = hashFn(key, this.limit);
    const bucket = this.storage[index];

    if (bucket === undefined) return null;

    for (const tuple of bucket) {
      if (tuple[0] === key) return tuple[1];
    }

    return null;
  }

  // 删除指定key 的数据
  remove(key) {
    const index = hashFn(key, this.limit);
    const bucket = this.storage[index];

    if (bucket === undefined) return null;

    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];
      if (tuple[0] === key) {
        bucket.splice(i, 1); // 删除对应位置的数组项
        this.count--;
        // 根据装填因子的大小，判断是否要进行哈希表压缩
        if (this.limit > 7 && this.count / this.limit < this.minLoadFactor) {
          this.resize(this.getPrime(Math.floor(this.limit / 2)));
        }
        return tuple;
      }
    }
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  //重新调整哈希表大小，扩容或压缩
  resize(newLimit) {
    // 保存就的storage
    const oldStorage = this.storage;

    // 重置所有属性
    this.storage = [];
    this.count = 0;
    this.limit = newLimit;

    for (const bucket of oldStorage) {
      if (bucket) {
        for (const b of bucket) {
          this.put(b[0], b[1]);
        }
      }
    }
  }
}

const hash = new HashTable();

hash.put("abc", "123");
hash.put("cba", "456");
hash.put("ncaa", "789");

console.log(hash.get("abc"));

hash.put("ncaa", 666);
console.log(hash.get("ncaa"));

hash.remove("abc");
console.log(hash.get("abc"));
