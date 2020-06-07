var createError = require("http-errors");
var express = require("express");
var path = require("path");
var logger = require("morgan");
var bodyParser = require("body-parser");

const Ticket = require("./models/ticket");
const Users = require("./models/user");

const tickets = require("./routes/tickets");
const users = require("./routes/users");

const db = require("./config/database");

db.connect();

var app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/tickets", tickets);
app.use("/users", users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

module.exports = app;
