var express = require("express");
const ticket = require("../controllers/ticketsCtrl");

var router = express.Router();

router.route("/").get(ticket.index).post(ticket.create);

module.exports = router;
