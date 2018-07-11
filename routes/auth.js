require('dotenv').config();
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

router.post('/signup', (req,res) => {
  // see if the email is already in the DB
  User.find({email: req.body.email}, function(err, user) {
    if (user) {
      // if exist? alert the user that email is taken
      // redirect to signup
      res.redirect('/auth/signup');
    } else {
      // else: create user in DB
      User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }, function(err, user) {
        // check for db errs
        if (err) {
          console.log("We got an error creating the user")
          console.log(err);
          res.send(err);
        } else {
          // log them in (sign a new token)
          console.log('><><>< JUST ABOUT TO SIGN THE TOKEN ><><><')
          // return user and token to frontend app
        }

      })

    }
  })
})

router.post('/login', (req, res) => {
  // Look up user in DB by email
    // if user?
      // check password input against hash
        // if match: sign a token
        // else send error, redirect to login
    // else redirect to /login
})

router.post('/me/from/token', (req,res) => {
  let token = req.body.token;
  // check for presence of a token
  if (!token) {
    // no token sent
  } else {
    // token sent
    // validate the token
      // if valid: lookup user in DB based on token info => send user and token back to frontend
      // else: send err => redirect to /login
  }
})


module.exports = router;