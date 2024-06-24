const http = require('http');

const server = http.createServer((req, res) =>{
    console.log('request event');
    res.end('hello world!');
});

server.listen(3000);
console.log(`server is running on http://localhost:3000`);

// request event printed after server is running...