const Ticket = require("../models/ticket");
const helpers = require("./helpers");

const validParams = ["user_name", "pedido"];

function index(req, res) {
  Ticket.find({})
    .then((docs) => {
      req.res.json(docs);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
}

function create(req, res) {
  const params = helpers.buildParams(validParams, req.body);
  console.log(req.user);
  params["_user"] = req.user.id;

  Ticket.create(params)
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
}

function find(req, res, next) {
  Ticket.findById(req.params.id)
    .then((ticket) => {
      req.ticket = ticket;
      req.mainObj = ticket;
      next();
    })
    .catch((err) => {
      next(err);
    });
}
function update(req, res) {
  //Actualizar un recurso

  const params = helpers.buildParams(validParams, req.body);
  req.ticket = Object.assign(req.ticket, params);
  console.log(req.ticket);

  req.ticket
    .save()
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
}
function destroy(req, res) {
  //Eliminar recursos
  req.ticket
    .remove()
    .then((doc) => {
      res.json({});
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
}
module.exports = { index, create, find, update, destroy };
