var express = require("express");
var router = express.Router();

const users = require("../controllers/usersCtrl");

router.route("/").post(users.create);

module.exports = router;
