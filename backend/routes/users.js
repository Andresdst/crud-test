var express = require("express");
var router = express.Router();

const users = require("../controllers/usersCtrl");
const sessions = require("../controllers/sessionsCtrl");

router
  .route("/")
  .post(users.create, sessions.generateToken, sessions.sendToken)
  .get(users.myTickets);

module.exports = router;
