const add = (a, b) => {
  return a + b;
}

const subtract = (a, b) => {
  return a - b;
}

const multiply = (a, b) => {
  return a * b;
}

const divide = (a, b) => {
  if(b == 0) return Error('cannot divide by zero');
  return a / b;
}

const pi = Math.PI;

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  pi,
}