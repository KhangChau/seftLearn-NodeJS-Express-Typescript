const express = require('express')

const { products } = require('./data.js');
const app = express();

//static file <- public access
app.use(express.static('./method-public'));

app.route('/').get((req, res) => {
    return res.json({msg: 'home page'});
})

//==================================================================================
// localhost:3000/api/products?start=a&limi=2
app.route('/api/products').get((req, res) => {
    if(!req.query.start || !req.query.limit){
        return res.json({success: false, products});
    }
    const { start, limit } = req.query;
    const startProducts = products.filter((product) => product.name.startsWith(start));
    if(startProducts.length === 0){
        return res.json({success: false, 'msg': `could\'t find the requested products start with ${start}`})
    }
    if(limit < 0 || limit > products.length){
        return res.json({success: false, startProducts});
    }
    return res.json(startProducts.slice(0, limit))
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