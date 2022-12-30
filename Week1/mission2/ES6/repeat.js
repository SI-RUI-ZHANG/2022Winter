const repeat = (msg, times) => {
    if (times === 0) {
        return '';
    }
    for (let i = 0; i < times; i++) {
        console.log(msg);
    }
};

export default repeat;