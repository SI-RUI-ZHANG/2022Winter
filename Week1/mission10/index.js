import fs from 'fs';

fs.promises.readFile('./surfing.mp4')
  .then((data) => {
    console.log(data);
  })