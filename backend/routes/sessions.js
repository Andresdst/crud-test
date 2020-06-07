var express = require("express");
var router = express.Router();

const sessions = require("../controllers/sessionsCtrl");

router
  .route("/")
  .post(sessions.authenticate, sessions.generateToken, sessions.sendToken);

module.exports = router;
