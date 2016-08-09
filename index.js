'use strict';

// implicit return with fat arrow functions - es6

const add = (a,b) => a + b

console.log(add(2,3))

var myNumbers = [2,4,6,8];

var biggerNumbers = myNumbers.map(function (n) {
  return n * n;
});

console.log(biggerNumbers)


