const mongoose = require("mongoose");
/*const mongoosePaginate = require("mongoose-paginate");
const slugify = require("../plugins/slugify");*/

let ticketSchema = new mongoose.Schema({
  _user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  user_name: String,
  pedido: {
    type: Boolean,
    default: false,
  },
});

let Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
