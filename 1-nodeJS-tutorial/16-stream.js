const { createReadStream } = require('fs')

const stream = createReadStream('./content/bigText.txt', {highWaterMark: 9000, encoding: 'utf-8'});

// default-64kb
// last buffer - remainder
// highWatermark - control size

stream.on('data', (result) => {
    console.log(result);
})

stream.on('error', (err) => {
    console.log(err);
})