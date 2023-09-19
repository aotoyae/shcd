function Person(name, first, second, third) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third;
  this.sum = function () {
    return this.first + this.second + this.third;
  };
}
var kim = new Person("kim", 10, 20, 30);
var lee = new Person("lee", 10, 10, 10);

console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());
// 객체 찍어내는 함수, 반복적으로 복제 가능, 객체 양산 가능!

var d1 = new Date("2023-09-16");
console.log("d1.getFullYear()", d1.getFullYear());
console.log("d1.getMonth()", d1.getMonth());
console.log("Date", Date);
console.log("Person()", Person());
console.log("new Person()", new Person());
// constructor 생성자 함수 new
