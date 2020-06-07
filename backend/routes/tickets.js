var express = require("express");
const ticket = require("../controllers/ticketsCtrl");

var router = express.Router();

router.route("/").get(ticket.index).post(ticket.create);

router
  .route("/:id")
  .put(ticket.find, ticket.update)
  .delete(ticket.find, ticket.destroy);

module.exports = router;
