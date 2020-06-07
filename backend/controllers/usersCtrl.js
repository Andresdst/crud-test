const User = require("../models/user");

const buildParams = require("./helpers").buildParams;

const validParams = ["email", "name", "password"];

function create(req, res, next) {
  let params = buildParams(validParams, req.body);
  User.create(params)
    .then((user) => {
      req.user = user;
      next();
      //res.json(user);
    })
    .catch((err) => {
      console.log(err);
      res.status(422).json({ err });
    });
}

function myTickets(req, res) {
  User.findOne({ _id: req.user.id })
    .then((user) => {
      console.log(user.tickets);

      user.tickets.then((tickets) => {
        res.json(tickets);
      });
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
}

module.exports = { create, myTickets };
