process.on('exit', () => {
    console.log('program end');
})

process.nextTick(() => {
    console.log('next tick output');
})

console.log('log output');
