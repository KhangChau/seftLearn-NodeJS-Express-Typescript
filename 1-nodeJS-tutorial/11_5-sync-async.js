// ~~ EXAMPLE OF SYNCRHONOUS PROCESSES
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const { readFileSync, writeFileSync } = require("fs");

// console.log('start process.');
// const first = readFileSync('./content/first.txt', 'utf-8');
// const second = readFileSync('./content/second.txt', 'utf-8');

// console.log(first, second);

// writeFileSync(
//     './content/result.txt', 
//     `this is the union of ${first} and ${second}\n`,
//     { flag: 'a'} 
// );

// // const result = readFileSync('./content/result.txt', 'utf-8');
// console.log('end process.');
// console.log('ready for moving to next process.');



// ======================================================================




// ~~ EXAMPLE OF ASYNCRHONOUS PROCESSES
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const { readFile , writeFile} = require("fs");

console.log('start the process.');
readFile('./content/first.txt', 'utf-8', (err, res) =>{
    if(err){
        console.log(err);
        return;
    }
    console.log(res);
    const first = res;
    readFile('./content/second.txt', 'utf-8', (err, res) => {
        if(err){
            console.log(err);
            return;
        }
        console.log(res);
        const second = res;
        writeFile('./content/result-async.txt',
            `[ASYNC] union ${first} and ${second}\n`, 
            { flag: 'a' }, 
            (err, res) => { 
               if(err){
                   console.log(err);
                   return;
               }
            //    const asyncResult = readFile('./content/result-async.txt','utf-8', (err, res) => {
            //         if(err){
            //             console.log(err);
            //             return
            //         }
            //         console.log(res);
            //    })

               console.log(`end process.`);
       } )
    })
})
console.log(`ready for moving to next process.`);

