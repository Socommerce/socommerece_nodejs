const mongoose = require('mongoose');

const token = new mongoose.Schema({
  access_token: {type: String, required: true, unique: true},
  
  refresh_token: String,
  expires_in: Number,
  token_type: String,
  date: { type: Date, default: Date.now }
  

});

const Token = mongoose.model('Token', token);

module.exports = Token;