const mongoose = require("mongoose");
const mongooseBcrypt = require("mongoose-bcrypt");
const Ticket = require("./ticket");

let userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: String,
  admin: {
    type: Boolean,
    default: false,
  },
});

userSchema.virtual("tickets").get(function () {
  console.log(this._id);
  console.log(this.name);

  return Ticket.find({ user_name: this.name });
});

userSchema.plugin(mongooseBcrypt);

const User = mongoose.model("User", userSchema);

module.exports = User;
