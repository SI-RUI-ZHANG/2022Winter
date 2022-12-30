// import a default export
import repeat from "./repeat.js";
repeat("Hello", 3);

// use multiple exports
import {Circle} from "./circle.js";
const c = new Circle(2);
console.log(`area of circle with radius 2: ${c.area()}`);

// another way to import from multiple exports
import * as math from "./math.js";
math.help();
console.log(`mean of [1, 2, 3]: ${math.mean([1, 2, 3])}`);
console.log(`stddev of [1, 2, 3]: ${math.stddev([1, 2, 3])}`);

// import with renaming
import {Circle as C} from "./circle.js";
const c2 = new C(2);
console.log(`area of circle with radius 2: ${c2.area()}`);

// import renamed exports
import {repeat_n_times} from "./renamed.js";
repeat_n_times("Hello", 3);
