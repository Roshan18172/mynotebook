const mongoose = require('mongoose');
// eslint-disable-next-line no-undef
const { Schema } = mongoose;
const NoteSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    default: "General"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('User', NoteSchema);