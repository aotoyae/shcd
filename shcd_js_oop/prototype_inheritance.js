var superObj = { superVal: "super" };
// var subObj = { subVal: "sub" };
// subObj.__proto__ = superObj;
var subObj = Object.create(superObj);
subObj.subVal = "sub";
// debugger;
console.log("subobj.subVal=>", subObj.subVal);
console.log("subobj.superVal=>", subObj.superVal);
subObj.superVal = "sub";
console.log("superObj.superVal=>", superObj.superVal);

var kim = {
  name: "kim",
  first: 10,
  second: 20,
  sum: function () {
    return this.first + this.second;
  },
};
// var lee = {
//   name: "lee",
//   first: 10,
//   second: 10,
//   avg: function () {
//     return (this.first + this.second) / 2;
//   },
// };
// lee.__proto__ = kim; //sum이 없지만 실행됨
var lee = Object.create(kim);
lee.name = "lee";
lee.first = 10;
lee.second = 10;
lee.avg = function () {
  return (this.first + this.second) / 2;
};
console.log("kim.sum() : ", kim.sum());
console.log("lee.sum() : ", lee.sum()); //상속받는거 가능
console.log("lee.avg() : ", lee.avg()); //자기만의 기능도 가능
