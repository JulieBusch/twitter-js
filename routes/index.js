"use strict";
const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  const someTweets = tweetBank.list();
  res.render( 'index', { tweets: someTweets } );
});

// router.get("/stylesheets/style.css", function(req, res, next) {
//   res.sendFile("../public/stylesheets/style.css");
// });

router.get('/users/:name', function(req, res) {
	const name = req.params.name;
	const tweetsFromUser = tweetBank.find({name: name});
	res.render('index', {tweets: tweetsFromUser});
});





module.exports = router;
