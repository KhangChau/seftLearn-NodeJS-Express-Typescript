const http = require('http');
const fs = require('fs');
const { log } = require('console');

const server = http.createServer((req, res) => {
    // const text = fs.readFileSync('./content/bigText.txt', 'utf8');
    // res.end(text);

    // same size file would be sent
    // but sent in chunks, not a big file at once
    const fileStream = fs.createReadStream('./content/bigText.txt', 'utf8');
    fileStream.on('open', () => {
        fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
        log(err);
    })
});

server.listen(8080, () => {
    log(`server is running on http://localhost:8080`);
})