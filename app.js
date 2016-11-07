var express = require( 'express' );
var app = express();
var chalk = require("chalk");
var morgan = require("morgan");
var nunjucks = require("nunjucks");

app.use(morgan("tiny"));

app.engine('html', nunjucks.render);
app.set('view engine', 'html')
nunjucks.configure('views', {noCache: true});
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

// var env = nunjucks.configure('views', {
// 	express: app,
// 	noCache: true
// });
app.get("/index.html", function(req, res, next) {
	res.render('index', {title: 'An Example', people: [{
	name: 'Gandalf'}, {name: 'Hermione'}, {name: 'Frodo'}]
}, function(err, output) {
	if (err) {
		console.log(err);
	}
	console.log(output);
});
})



