var express = require( 'express' );
var app = express();
var chalk = require("chalk");
var morgan = require("morgan");
var nunjucks = require("nunjucks");

app.use(morgan("tiny"));

// app.use(function (req, res, next) {
//     console.log(chalk.green(req.method, " ", req.url));
//     next();
//     // call `next`, or else your app will be a black hole — receiving requests but never properly responding
// })

app.use("/special/", function (req, res, next) {
    console.log(chalk.magenta("You found something special!"));
    next();
})

app.get("/", function(req, res, next) {
  res.send("Welcome!");
});

app.get("/news", function(req, res, next) {
  res.send("Look at all this news!")
});






app.listen(3000, function() {
  console.log("server listening");
});
