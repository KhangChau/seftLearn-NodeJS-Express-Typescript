const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first, second);

writeFileSync(
    './content/result.txt', 
    `this is the union of ${first} and ${second}\n`,
    { flag: 'a'} 
);

const result = readFileSync('./content/result.txt', 'utf-8');
console.log(result);