const { readFile, writeFile } = require('fs');
const { promisify } = require('util');

// The util.promisify() function takes a function 
// that follows the Node.js-style callback pattern 
// (i.e., a function that takes a callback as its last argument) 
// and returns a new function that returns a Promise.
const readFilePromise = promisify(readFile);
const writeFilePromise = promisify(writeFile);


// // promises setup
// // promise = eventually completion or failure of asynchronous operation
// // complete -> resolve() result of callback
// // fail     -> reject() error rose from failed callback
// const getText = (path, encoded) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, enconded, (err, data) => {
//             if(err){
//                 reject(err);
//             }
//             else {
//                 resolve(data);
//             }
//         })
//     })
// }

// // then(<callback>) handle resolve
// // catch(<callback>) handle reject
// const text = getText("./content/first.txt")
//             .then((result) => {console.log(result);})
//             .catch((err) => {console.log(err);});

// async - wait
const start = async () => {
    try {
        first = await readFilePromise("./content/first.txt", "utf-8");
        second = await readFilePromise("./content/second.txt", "utf-8");        
        console.log(first, second);
        await writeFilePromise("./content/promise-pattern-result.txt", `${first}\n${second}`, { flag: 'a' })
    } catch (error) {
        console.log(err);
    }
}

start();

// console.log(text);