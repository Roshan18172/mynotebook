const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Import the User model

//create a new user using POST method "/api/auth/createuser"


router.post('/', (req, res) => {
    console.log(req.body)
    const user=User(req.body)
    user.save();
    res.send(req.body);
    
});

module.exports = router;
// This file defines the authentication routes for the application.