class Scheduler {
  constructor(limit) {
    this.limit = limit;
    this.number = 0;
    this.queue = [];
  }
  addTask(timeout, str) {
    this.queue.push([timeout, str]);
  }
  start() {
    if (this.number < this.limit && this.queue.length) {
      const [timeout, str] = this.queue.shift();
      this.number++;

      setTimeout(() => {
        console.log(str);
        this.number--;
        this.start();
      }, timeout * 1000);
      this.start();
    }
  }
}

const scheduler = new Scheduler(2); // 设置最大并发数为 2

scheduler.addTask(1, "Task 1"); // 在 1 秒后输出 'Task 1'
scheduler.addTask(2, "Task 2"); // 在 2 秒后输出 'Task 2'
scheduler.addTask(3, "Task 3"); // 在 3 秒后输出 'Task 3'
scheduler.addTask(1, "Task 4"); // 在 1 秒后输出 'Task 4'

scheduler.start();
