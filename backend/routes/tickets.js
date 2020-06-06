var express = require("express");
const Ticket = require("../models/ticket");

var router = express.Router();

router
  .route("/")
  .get((req, res) => {
    Ticket.find({})
      .then((docs) => {
        res.json(docs);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  })

  .post((req, res) => {
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
  });

module.exports = router;
