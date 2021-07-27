
const sum = arr => {
  return arr.reduce((prev, next) => prev + next, 0);
}

const multiply = arr => {
  return arr.reduce((prev, next) => prev * next, 1);
}


const reverse = str => {
  return str.split("").reverse().join("");
}

const filterLongWords = (arr, i) => {
  return arr.filter(str => str.length > i);
}