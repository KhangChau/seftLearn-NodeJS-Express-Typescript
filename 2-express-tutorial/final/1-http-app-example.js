// console.log('Express Tutorial')

const { log } = require('console');
const { readFileSync } = require('fs');
const http = require('http')

const homePageFile = readFileSync('./navbar-app/index.html');
const styles = readFileSync('./navbar-app/styles.css');
const logo = readFileSync('./navbar-app/logo.svg');
const browser = readFileSync('./navbar-app/browser-app.js');

const server = http.createServer((req, res) => {
    // log(req.method);
    log(req.url);

    // style
    if(req.url === '/styles.css'){
        res.writeHead(200, { 'content-type': 'text/css' }); 
        res.write(styles);
        res.end();    
    }
    // logo
    else if(req.url === '/logo.svg'){
        res.writeHead(200, { 'content-type': 'text/svg+ml' }); 
        res.write(logo);
        res.end();    
    }
    // browser
    else if(req.url === '/browser-app.js'){
        res.writeHead(200, { 'content-type': 'text/javascript' }); 
        res.write(browser);
        res.end();    
    }

    // homepage
    else if(req.url === '/'){
        res.writeHead(200, { 'content-type': 'text/html' }); 
        res.write(homePageFile);
        res.end();    
    }

    // about 
    else if(req.url === '/about'){
        res.writeHead(200, { 'content-type': 'text/html' }); 
        res.write(`<h1>About Page</h1>`);
        res.end();    
    }

    // error
    else {
        res.writeHead(400, { 'content-type': 'text/html' }); 
        res.write(`
            <h1>Oops!</h1>
            <a href="/">home page</a>`);
        res.end();    
    }
    
})

server.listen(8080, () => {
    log(`server is running on http://localhost:8080`)
})