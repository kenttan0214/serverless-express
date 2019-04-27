import mongoose from 'mongoose';

const ADSchema = new mongoose.Schema({
  email: String,
  img: String,
  body: String
});
module.exports = mongoose.model('Advertisement', ADSchema);
