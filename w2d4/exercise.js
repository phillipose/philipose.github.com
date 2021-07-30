String.prototype.filter = function(...bannedWords) {
  return bannedWords.reduce((acc, curr) => acc.replace(curr, '').trim(), this);
}

const bubbleSort = (inputArr) => {
  let len = inputArr.length;
  let checked;
  do {
      checked = false;
      for (let i = 0; i < len; i++) {
          if (inputArr[i] > inputArr[i + 1]) {
              let tmp = inputArr[i];
              inputArr[i] = inputArr[i + 1];
              inputArr[i + 1] = tmp;
              checked = true;
          }
      }
  } while (checked);
  return inputArr;
};

Array.prototype.bubbleSort = function() {
  return bubbleSort(this);
}

console.log([6,4,0, 3,-2,1].bubbleSort());

var Person = function() {}
Person.prototype.initialize = function(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.describe = function() {
  return `${this.name}, ${this.age} years old.`;
}

var Student = function() {}
Student.prototype.__proto__ = Person.prototype;
Student.prototype.learn = function(subject) {
  console.log(`${this.name} just learned ${subject}`);
}

var me = new Student();
me.initialize("John", 25);
me.learn("Inheritance");

var Teacher = function() {};
Teacher.prototype.__proto__ = Person.prototype;
Teacher.prototype.teach = function(subject) {
  console.log(`${this.name} is now teaching ${subject}`);
}

var teacher = new Teacher();
teacher.initialize("Doe", 40);
teacher.teach("WAP");