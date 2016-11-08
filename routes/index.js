"use strict";
const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  const someTweets = tweetBank.list();
  res.render( 'index', { tweets: someTweets, showForm: true} );
});

// router.get("/stylesheets/style.css", function(req, res, next) {
//   res.sendFile("../public/stylesheets/style.css");
// });

router.get('/users/:name', function(req, res) {
	const name = req.params.name;
	const tweetsFromUser = tweetBank.find({name: name});
	res.render('index', {tweets: tweetsFromUser, showForm: false});
});

router.get('/tweets/:id', function(req, res) {
	const theTweet = tweetBank.find({id: parseInt(req.params.id, 10)});
	res.render('index', {tweets: theTweet});
});

router.post('/tweets', function(req, res) {
	tweetBank.add(req.body.name, req.body.text);
	res.redirect('/');
});

module.exports = router;
