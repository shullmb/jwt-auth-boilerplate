const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'We need it, your name'],
    minLength: [1, 'Name must be between 1 and 99 characters'],
    maxLength: [99, 'Name must be between 1 and 99 characters']
  },
  email: {
    type: String,
    required: [true, 'We need it, your email'],
    minLength: [5, 'Email must be between 1 and 99 characters'],
    maxLength: [99, 'Email must be between 1 and 99 characters'],
  },
  password: {
    type: String,
    required: [true, 'We need it, your password'],
    minLength: [8, 'Password must be between 8 and 99 characters'],
    maxLength: [99, 'Password must be between 8 and 99 characters']
  }
})

const User = new mongoose.model('User', userSchema);

module.exports = User;