const mongoose = require("mongoose");
/*const mongoosePaginate = require("mongoose-paginate");
const uploader = require("./uploader");
const slugify = require("../plugins/slugify");

const Visit = require("./Visit");*/

let ticketSchema = new mongoose.Schema({
  id_user: {
    type: Number,
    required: true,
  },
  // id_user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  //   required: true,
  // },

  pedido: {
    type: Boolean,
    default: false,
  },
});

let Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
