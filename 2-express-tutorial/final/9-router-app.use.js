const express = require('express')
const {log} = require('console')
// simulated database
// const { people } = require('./data.js'); 
const app = express();
const morgan = require('morgan');
const {urlencoded} = require('body-parser');
const people = require('../routers/people.js')
//static file <- public access 
// -> by default, '/' with index.html
app.use(express.static('./methods-public'));
// APP.USE() HERE! -> apply all declared middleware(s) for all below routers
app.use(morgan('tiny'));
app.use(urlencoded({extended: true}))
app.use(express.json());

//==================================================================================
// GET          /api/orders             get all orders
// GET          /api/orders/:id         get single order (path params)
// POST         /api/orders/:id         place an order (send data)
// PUT          /api/orders/:id         update specific order (path params + send data)
// DELETE       /api/orders/:id         delete specific order (path params)
//==================================================================================

// login
app.route('/login').post((req, res) => {
    const { name } = req.body;
    // console.log(`${name} already login!`);
    res.send(`cam on ${name} vi da den!`)
    const idPerson = people.length + 1;
    return res.status(200).json({ success: true, person:{id: idPerson, name}})
})

app.use('/api/people', people);
//==================================================================================

// app.route('/*').get((rep, res) => {
//     return res.send(`
//         <h1>Oops!</h1>
//         <h3>We couldn't find the link you looking for!</h3>
//         <a href="/">home page</a>
//         `)
// })

const port = 3000;
app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
})