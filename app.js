"use strict";
var express = require( 'express' );
var app = express();
var chalk = require("chalk");
var morgan = require("morgan");
var nunjucks = require("nunjucks");
const routes = require('./routes/');

app.use('/', routes);

app.use(morgan("tiny"));

app.engine('html', nunjucks.render);
//You have an html view engine, it is nunjucks
app.set('view engine', 'html')
//When you get an html file, use your view engine
nunjucks.configure('views', {noCache: true});
//When you look for a template, look in the views folder,
//and don't cache

app.listen(3000, function() {
  console.log("server listening");
});




// app.get("/index", function(req, res, next) {
// 	res.render('index', people);
//   //render is an express method but nunjucks is our rendering engine
// });



