// use multiple exports
const sum = (a, b) => a + b;
const square = num => num * num;
export const mean = data => data.reduce(sum) / data.length;
export const stddev = data => {
    const m = mean(data);
    return Math.sqrt(mean(data.map(x => square(x - m))));
};

export const help = () => {
    console.log("this module exports functions for calculating mean, and standard deviation of an array of numbers");
};

// or you can
// export {mean, stddev, help}