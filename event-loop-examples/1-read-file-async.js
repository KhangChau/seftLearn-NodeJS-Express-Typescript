console.log(`start the task.`);
const { readFile } = require('fs')

readFile("../content/first.txt","utf-8", (err, res) =>{
    if(err){
        console.log(err);
        return 
    }
    console.log(res);
    console.log(`the task is completed!`);
})
console.log(`ready for moving to the next task.`);
