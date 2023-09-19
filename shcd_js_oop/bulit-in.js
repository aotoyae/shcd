console.log("Mate.PI", Math.PI);
console.log("Math.random", Math.random());
console.log("Math.floor(3.9)", Math.floor(3.9));

var MyMath = {
  PI: Math.PI,
  random: function () {
    return Math.random();
  },
  floor: function (val) {
    return Math.floor(val);
  },
};
console.log("MyMath.PI", MyMath.PI);
console.log("MyMath.random()", MyMath.random());
console.log("MyMath.floor(2.3)", MyMath.floor(2.3));

var MyMath_PI = Math.PIfun;
function MyMath_random() {
  return Math.random();
}
function MyMath_floor(val) {
  return Math.floor(val);
}
