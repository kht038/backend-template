import fs from 'fs';

// typescript 문법
let count: number = 0;
fs.readFile('package.json', 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  count = data.split('\n').length;
  console.log(`${count} lines`);
});
