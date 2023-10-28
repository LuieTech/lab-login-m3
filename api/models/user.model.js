const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs'); 

const schema = new Schema({

  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

},
{
  timestamps: true,
  toJSON: {
    transform: function (doc, ret) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
      delete ret.password;
      return ret;
    }
  }
})

schema.pre("save", function (next) {

  if (this.isModified("password")) {
    
    bcrypt.hash(this.password, 10).then((hash) => {

      this.password = hash;
      next();

    }).catch(err => next(err));
  } else {
    next();
  }

});

schema.methods.checkPassword = function (passwordToCheck) {

  return bcrypt.compare(passwordToCheck, this.password)

}

const User = mongoose.model("User", schema);
module.exports = User;