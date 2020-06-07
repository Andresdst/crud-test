const mongoose = require("mongoose");
//const mongooseBcrypt = require("mongoose-bcrypt");

let userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  name: String,
  admin: {
    type: Boolean,
    default: false,
  },
});

//userSchema.plugin(mongooseBcrypt);

const User = mongoose.model("User", userSchema);

module.exports = User;
