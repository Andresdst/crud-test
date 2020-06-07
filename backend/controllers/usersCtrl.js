const User = require("../models/user");

function create(req, res) {
  User.create({
    email: req.body.email,
    name: req.body.name,
    password: req.body.password,
  })
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
}
module.exports = { create };
