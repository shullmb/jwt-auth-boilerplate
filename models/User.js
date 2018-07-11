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

// return user object without password
userSchema.set('toObject', {
  transform: function(doc, ret, options) {
    let returnJson = {
      _id: ret._id,
      email: ret.email,
      name: ret.name
    }
    return returnJson;
  }
})

// checks password input against hashed password - returns boolean 
userSchema.methods.authenticated = function(password) {
  return bcrypt.compareSync(password, this.password);
}

// middleware to hash password before inserted into db
userSchema.pre('save', function(next) {
  if (this.isNew) {
    let hash = bcrypt.hashSync(this.password, 12); //<= 12 is the new standard
    this.password = hash;
  }
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;