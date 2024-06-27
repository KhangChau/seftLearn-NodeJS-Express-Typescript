// simulated data
const { people } = require('../data.js'); 


const getAllPeople = (req, res) => {
    return res.status(200).json({sucess:true, data: people,});
}

const getPersonById = (req, res) => {
    const { id } = req.params;
    const person = people.filter(person => person.id === Number(id))
    if(person){
        return res.status(200)
                  .json(person)
    }
    return res.status(404).json({success: false, msg: `there is no requested person with id = ${req.params.id}`})
}

const createPerson = (req, res) => {
    // check req.body.name exists yet?
    const { name } = req.body;
    if(!name){
        return res.status(404).json({success: false, msg: "Please input the name."})
    }
    return res.status(201).json({success: true, person:name})
}

const updatePerson = (req, res) => {
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
}

const deletePerson = (req, res) => {
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
}

module.exports = { getAllPeople, getPersonById, createPerson, updatePerson, deletePerson };