const fs = require('fs');

const readJson = (path) =>
    fs.promises.readFile(path)
        .then(data => console.log(JSON.parse(data)))
        .catch(err => console.log(err));

readJson('./test.json');
console.log('end');