const express = require('express');
// controllers
const { auth } = require('../controllers/authentication.js')
const router = express.Router();

// login
router.route('/').post(auth)

module.exports = router;