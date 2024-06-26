const express = require('express')

const { products } = require('./data.js');
const app = express();

//static file <- public access
app.use(express.static('./method-public'));

app.route('/').get((req, res) => {
    return res.json({msg: 'home page'});
})

app.route('/api/products').get((req, res) => {
    return res.json(products)
    });

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