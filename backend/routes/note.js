const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json([]);
});

module.exports = router;
// This file defines the authentication routes for the application.