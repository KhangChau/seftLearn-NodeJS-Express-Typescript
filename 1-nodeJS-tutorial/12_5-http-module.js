const http =  require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('welcome to website');
    }
    else if (req.url === '/about'){
        res.end('info of webpage!');
    }
    // else {
        res.end(`Oops!`);
    // }
});

const port = 3000;
server.listen(port);
console.log(`server is running on http://localhost:${port}`);