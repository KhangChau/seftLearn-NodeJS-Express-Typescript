const { readFile , writeFile} = require("fs");

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
               const asyncResult = readFile('./content/result-async.txt','utf-8', (err, res) => {
                    if(err){
                        console.log(err);
                        return
                    }
                    console.log(res);
               })
       } )
    })
})
