const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Import the User model
const { body , validationResult } = require('express-validator');
const fetchuser = require('../middleware/fetchUser'); // Middleware to fetch user details

const JWT_SECRET="mysecretkey"; // Secret key for JWT
//route 1 : create a new user using POST method "/api/auth/createuser"
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
    // Hash the password before saving it to the database
    const salt = await bcrypt.genSalt(10);
    const secPassword = await bcrypt.hash(req.body.password, salt);
    // Create a new user
    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPassword
        })
    .then(user => {
        // Create a JWT token
        const data = {
            user: {
                id: user.id
            }
        };
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({ authToken });
        // res.json(user);
    }).catch(err => {
        console.error(err);
        res.status(500).send('Server Error');
    });     
});

//route 2 : Authenticate a user using POST method "/api/auth/login"
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists()
], async (req, res) => {
    // Find the validation errors in this request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        // Check if user exists
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }
        // Compare the password with the hashed password
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }
        // Create a JWT token
        const data = {
            user: {
                id: user.id
            }
        };
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({ authToken });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

//route 3 : Get logged in user details using POST method "/api/auth/getuser"
router.post('/getuser',fetchuser, async (req, res) => {
    // Get the user from the JWT token and return user details
    try {
        const userId = req.user.id; // Assuming req.user is set by a middleware that verifies the token
        const user = await User.findById(userId).select("-password"); // Exclude password from response
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
// This file defines the authentication routes for the application.