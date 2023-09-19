class Person {
  constructor(name, first, second, third) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
  }
  sum() {
    return this.first + this.second + this.third;
  }
}
class PersonPlus extends Person {
  constructor(name, first, second, third, forth) {
    super(name, first, second, third);
    this.forth = forth;
  }
  sum() {
    return super.sum() + this.forth;
  }
  avg() {
    return (this.first + this.second + this.third + this.forth) / 4;
  }
}

var kim = new PersonPlus("kim", 10, 20, 30, 40);
console.log("kim.sum()", kim.sum());
console.log("kim.avg()", kim.avg());
