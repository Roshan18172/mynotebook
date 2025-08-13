const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Import the User model
const { body , validationResult } = require('express-validator');

//create a new user using POST method "/api/auth/createuser"
router.post('/createuser', [
    body('email', 'Enter a valid email').isEmail(),
    body('name', 'Name must be at least 3 characters').isLength({ min: 3 }),
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 })
], async(req, res) => {
    // Find the validation errors in this request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // Check if user with this mail already exists
    let user = await User.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).json({ error: "Sorry, a user with this email already exists" });
    } 
    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    .then(user => {
        res.json(user);
    }).catch(err => {
        console.error(err);
        res.status(500).send('Server Error');
    });     
});

module.exports = router;
// This file defines the authentication routes for the application.