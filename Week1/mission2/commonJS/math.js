// use multiple exports
const sum = (a, b) => a + b;
const square = num => num * num;
const mean = data => data.reduce(sum) / data.length;
const stddev = data => {
    const m = mean(data);
    return Math.sqrt(mean(data.map(x => square(x - m))));
};
const help = () => {
    console.log("this module exports functions for calculating mean, and standard deviation of an array of numbers");
};

module.exports = {mean, stddev, doc: help};
