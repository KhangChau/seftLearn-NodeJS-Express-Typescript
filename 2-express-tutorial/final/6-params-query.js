const express = require('express')

const { products } = require('../data.js');
const app = express();

//static file <- public access
app.use(express.static('./methods-public'));

app.route('/').get((req, res) => {
    return res.json({msg: 'home page'});
})
// ==========================================================================================
app.route('/api/products').get((req, res) => {
    return res.json(products)
    });
    
app.route('/api/products/customize').get((req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image};
    });
    console.log(newProducts);
    return res.json(newProducts);

})
// ==========================================================================================

app.route('/api/products/:productId').get((req, res) => {
    const { id } = req.params;
    // console.log(req.params);
    
    const product = products.find((product) => product.id === Number(productId));
    
    // console.log(product);
    if(product){
        return res.json(product);
    }
    return res.json({'msg': 'could\'t find the requested id product.'})
})


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