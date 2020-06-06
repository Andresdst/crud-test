const Ticket = require("../models/ticket");

function index(req, res) {
  Ticket.find({})
    .then((docs) => {
      res.json(docs);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
}

function create(req, res) {
  Ticket.create({
    id_user: req.body.id_user,
    pedido: req.body.pedido,
  })
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
}
module.exports = { index, create };
