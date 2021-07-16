function calc() {
  return this.a + this.b;
}

const obj = {
  a: 2,
  b: 3
}

calc.call(obj);