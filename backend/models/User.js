const mongoose = require('mongoose');
const { Schema } = mongoose;
// eslint-disable-next-line no-undef
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const User= mongoose.model('User', UserSchema);
// User.cleanIndexes(); // Clean up indexes to avoid duplicates
module.exports = User;
// This file defines the User model for the application.