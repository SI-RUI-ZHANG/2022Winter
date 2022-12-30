// import a default export
const isEven = require('./isEven.js');
console.log(`1 is even: ${isEven(1)}`);
console.log(`2 is even: ${isEven(2)}`);

// use multiple exports
const math = require('./math.js');
math.doc();
console.log(`mean of [1, 2, 3]: ${math.mean([1, 2, 3])}`);
console.log(`stddev of [1, 2, 3]: ${math.stddev([1, 2, 3])}`);

// another way to import from multiple exports
const {doc, mean, stddev} = require('./math.js');
doc();
console.log(`mean of [1, 2, 3]: ${mean([1, 2, 3])}`);
console.log(`stddev of [1, 2, 3]: ${stddev([1, 2, 3])}`);
