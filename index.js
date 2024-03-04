var express = require("express");
var bodyParser = require("body-parser");

var auth = require("./routes/auth");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/auth", auth);

//mysql connection pool
var sqlPool = require("./modules/sqlPool");
global.sqlPool = sqlPool;

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.listen(3000, function () {
  console.log("Express server listening on port 3000");
});

module.exports = app;
