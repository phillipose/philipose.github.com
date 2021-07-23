(function() {
  /* runs test to see if expected argument is === to value returned by function2test argument */
  const myFunctionTest = (expected, found) => {
      if(Array.isArray(expected)) {
          expected = JSON.stringify(expected);
          found = JSON.stringify(found);
      };
      console.assert(expected === found, `Expected out put is ${found}`);
  }

  /* max returns the maximum of 2 arguments */
  const max = (a, b) => {
      if (a > b) {
          return a;
      } else {
          return b;
      };
  }

  /* max3 takes 3 numbers as arguments and returns the largest */
  const maxOfThree = (a, b, c) => {
      return max(max(a, b), c);

  }

  // checks if character is vowel
  const isVowel = char => {
      return /[aeiou]/i.test(char);
  }

  // sums all numbers in the array
  const sum = arr => {
      return arr.reduce((prev, next) => prev + next, 0);
  }

  // multiplies elements in the array
  const multiply = arr => {
      return arr.reduce((prev, next) => prev * next, 1);
  }

  // reverses string
  const reverse = str => {
      return str.split("").reverse().join("");
  }

  // returns length of longest string in array
  const longestString = arr => {
      return arr.reduce((prev, next) => prev.length > next.length ? prev.length : next.length);
  }

  // returns list of words whose length is greater than a specicfic number
  const filterLongWords = (arr, i) => {
      return arr.filter(str => str.length > i);
  }

  const a = [1,3,5,3,3]; 
  console.log(a.map(e => e * 10));
  console.log(a.filter(e => e === 3));
  console.log(a.reduce((p, n) => p * n, 1));


  /* Test cases */
  myFunctionTest(20, max(20, 10));

  myFunctionTest(44, maxOfThree(5, 4, 44));
  myFunctionTest(55, maxOfThree(55, 4, 44));

  myFunctionTest(true, isVowel("E"));
  myFunctionTest(true, isVowel("e"));
  myFunctionTest(false, isVowel("t"));

  myFunctionTest(10, sum([1,4,5]));

  myFunctionTest(20, multiply([1,4,5]));

  myFunctionTest("dcba", reverse('abcd'));

  myFunctionTest(5, longestString(['abcd', "abc", "76544"]));

  myFunctionTest(['abcd', "76544"], filterLongWords(['abcd', "abc", "76544"], 3));
})()