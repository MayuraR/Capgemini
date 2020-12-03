  
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    lowercase: true,
  },
  role: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  }
});

userSchema.pre('save', async function(next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
}); 

userSchema.statics.login = async function(userId, password) {
  const user = await this.findOne({ userId });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error('Enter the password again');
  }
  throw Error('Enter the userId again');
};

const User = mongoose.model('user', userSchema);

module.exports = User;