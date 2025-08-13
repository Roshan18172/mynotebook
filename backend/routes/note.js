const express = require('express');
const { body, validationResult } = require('express-validator'); // Import express-validator for validation 
const router = express.Router();
const fetchuser = require('../middleware/fetchUser'); // Middleware to fetch user details
const Note = require('../models/Note'); // Import the Note model
//route 1: Fetch all notes using GET method "/api/note/fetchallnotes" login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    // Fetch all notes for the authenticated user
    const note = await Note.find({ user: req.user.id });
    res.json(note);
});
//route 2: Add a new note using POST method "/api/note/addnote" login required
router.post('/addnote', fetchuser, [
    body('title', 'Title must be at least 3 characters').isLength({ min: 3 }),
    body('description', 'Description must be at least 5 characters').isLength({ min: 5 }),
    body('tag', 'Tag must be at least 1 character').isLength({ min: 1 })
], async (req, res) => {
    // Create a new note with the provided title, description, and tag
    const { title, description, tag } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const note = new Note({
            title,
            description,
            tag,
            user: req.user.id
        });
        const savedNote = await note.save();
        res.json(savedNote);
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

//route 3: Update an existing note using PUT method "/api/note/updatenote/:id" login required
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    // Update an existing note by its ID
    const { title, description, tag } = req.body;
    // Create a new note object with the updated values
    const newNote = {};
    if (title) { newNote.title = title; }
    if (description) { newNote.description = description; }
    if (tag) { newNote.tag = tag; }
    // Find the note by ID and update it
    let note = await Note.findById(req.params.id);
    if (!note) {
        return res.status(404).send('Not Found');
    }
    if (note.user.toString() !== req.user.id) {
        return res.status(401).send('Not Allowed');
    }
    note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
    res.json({ note });
});

module.exports = router;
// This file defines the authentication routes for the application.