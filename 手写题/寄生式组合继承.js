function inheritPrototype(sourceType, children) {
    const prototype = Object(sourceType.prototype)
    
    prototype.constructor = children
    children.prototype=prototype
}

function Teacher(nickname, age, height) {
  this.nickname = nickname;
}

function Student(nickname) {
  Teacher.call(this, nickname);
  this.hobby = ["唱", "跳", "rap"];
}

inheritPrototype(Teacher, Student);

Teacher.prototype.running = function () {
  console.log("老师会跑步");
};

Student.prototype.running = function () {
  console.log("学生也会跑步");
};

const student = new Student("moment");

student.running(); // 学生也会跑步
console.log(student.hobby); // ['唱', '跳', 'rap']
console.log(student.nickname); // comment
