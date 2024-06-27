const http = require('http')

const server = http.createServer();

// emits request event
// subscribe to it/ listen for it/ response to it 
server.on('requests', (req, res) => {
    res.end('welcom webpage');
});

server.listen(2000, () => {
    console.log(`server is running on http://localhost:2000`);
});
