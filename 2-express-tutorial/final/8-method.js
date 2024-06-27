const express = require('express')
const {log} = require('console')
// simulated database
const { people } = require('../data.js'); 
const app = express();
const morgan = require('morgan');
const {urlencoded} = require('body-parser');

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

// GET
app.route('/api/people').get((req, res) => {
    return res.status(200).json({sucess:true, data: people,});
})

app.route('/api/people/:id').get((req, res) => {
    const { id } = req.params;
    const person = people.filter(person => person.id === Number(id))
    if(person){
        return res.status(200)
                  .json(person)
    }
    return res.status(404).json({success: false, msg: `there is no requested person with id = ${req.params.id}`})
})

// POST
app.route('/api/people').post((req, res) => {
    // check req.body.name exists yet?
    const { name } = req.body;
    if(!name){
        return res.status(404).json({success: false, msg: "Please input the name."})
    }
    return res.status(201).json({success: true, person:name})
})

// PUT
app.route('/api/people/:id').put((req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const person = people.find(person => person.id === Number(id))
    if(!person){
        return res.status(404)
                  .json({success: false, msg: `there is no requested person with id = ${req.params.id}`})
    }
    
    people.map(person => {
        if(person.id === Number(id)){
            person.name = name;
        }
    })
    return res.status(200)
              .json(people)
})

// DELETE
app.route('/api/people/:id').delete((req, res) => {
    const { id } = req.params;

    const person = people.find(person => person.id === Number(id))
    // console.log(person);
    if(!person){
        return res.status(404)
                  .json({success: false, msg: `there is no requested person with id = ${req.params.id}`})
    }

    const newPeople = people.filter(person => person.id !== Number(id))
    console.log(newPeople);
    return res.status(200)
              .json(newPeople)
})
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