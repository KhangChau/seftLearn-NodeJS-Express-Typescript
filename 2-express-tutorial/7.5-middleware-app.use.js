const express = require('express')
const {log} = require('console')
const { products } = require('./data.js');
const app = express();

//static file <- public access
app.use(express.static('./method-public'));

app.route('/').get((req, res) => {
    return res.json({msg: 'home page'});
})

//==================================================================================
                    // REQ => MIDDLEWARE => RES
const logger = (req, res, next) => {
    const url = req.url;
    const method = req.method;
    const time = new Date().getFullYear();
    log(`${method} ${url} ${time}`);
    next(); // always end middleware with next() to pass to the next func
}
const login = (req, res, next) => {
    log('accept login!')
    next();
}
// // APP.USE() HERE! -> apply all declared middleware(s) for all below routers
app.use(logger, login);
// app.use(login, logger);

app.route('/api/products').get((req, res) => {
    // return res.status(404)
    return res.status(200)
              .json(products)
})

app.route('/api/test-Middleware').get((req, res) => {
    return res.status(200).json({msg: 'test middleware',})
})
//==================================================================================

app.route('/*').get((rep, res) => {
    return res.send(`
        <h1>Oops!</h1>
        <h3>We couldn't find the link you looking for!</h3>
        <a href="/">home page</a>
        `)
})

const port = 3000;
app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
})