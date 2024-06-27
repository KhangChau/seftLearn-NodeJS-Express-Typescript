const express = require('express')
const {log} = require('console')
// simulated database
// const { people } = require('./data.js'); 
const app = express();
const morgan = require('morgan');
const {urlencoded} = require('body-parser');
const people = require('./routers/people.js')
const authen = require('./routers/authentication.js');

//static file <- public access 
// -> by default, '/' with index.html
app.use(express.static('./methods-public'));

// middleware
app.use(morgan('tiny'));
app.use(urlencoded({extended: true}))
app.use(express.json());

// router
app.use('/login', authen);
app.use('/api/people', people);

const port = 3000;
app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
})