"use strict";
const express = require( 'express' );
const chalk = require("chalk");
const morgan = require("morgan");
const nunjucks = require("nunjucks");
const routes = require('./routes/');

const app = express();
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

app.get("/index.html", function(req, res, next) {
	res.render('index', {title: 'An Example', people: [{
	name: 'Gandalf'}, {name: 'Hermione'}, {name: 'Frodo'}]
}, function(err, html) {
	if (err) {
		console.log(err);
	}
	res.send(html);
	});
});

app.use(express.static('public'));
//above code replaces res.sendFile handler below 

// app.get("/stylesheets/style.css", function(req, res, next) {
// 	var options = {
// 		root: __dirname, 
// 		dotfiles: 'deny', 
// 		headers: {
// 			'x-timestamp': Date.now(),
// 			'x-sent': true
// 		}
// 	};
// 	// var fileName = req.params.name;
// 	res.sendFile('/public/stylesheets/style.css', options, function(err) {
// 		if (err) {
// 			console.log(err);
// 			res.status(err.status).end();
// 		} else {
// 			console.log('Sent: ', fileName);
// 		}
// 	});
// });


