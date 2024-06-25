
const { readFileSync, writeFileSync } = require("fs");

// const first = readFileSync('./content/first.txt', 'utf-8');
// const second = readFileSync('./content/second.txt', 'utf-8');

// console.log(first, second);
for(let i = 0; i < 100000; i++) {
    writeFileSync(
        './content/bigText.txt', 
        `content line no.${i}\n`,
        { flag: 'a'} 
    );
}

// const result = readFileSync('./content/result.txt', 'utf-8');
// console.log(result);