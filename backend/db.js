const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost:27017/Roshan';

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit process with failure
  }
}
// const connectDB=()=>{
//     mongoose.connect(dbURI, ()=>{
//         console.log('MongoDB connected successfully');
//     })
// }
module.exports = connectDB;
