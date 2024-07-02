const express = require('express');
// controllers
const { getAllPeople, getPersonById, createPerson, updatePerson, deletePerson } = require('../controllers/people.js');
x
const router = express.Router();

//==================================================================================
// GET          /api/orders             get all orders
// GET          /api/orders/:id         get single order (path params)
// POST         /api/orders/:id         place an order (send data)
// PUT          /api/orders/:id         update specific order (path params + send data)
// DELETE       /api/orders/:id         delete specific order (path params)
//==================================================================================

// GET
router.route('/').get(getAllPeople)

router.route('/:id').get(getPersonById)

// POST
router.route('').post(createPerson)

// PUT
router.route('/:id').put(updatePerson)

// DELETE
router.route('/:id').delete(deletePerson)
//==================================================================================


module.exports = router;