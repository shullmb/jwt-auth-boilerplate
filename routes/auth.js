require('dotenv').config();
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

router.post('/signup', (req,res) => {
  // see if the email is already in the DB
    // if exist? alert the user that email is taken
      // redirect to signup
    // else 
      // create user in DB
      // check for db errs
      // log them in (sign a new token)
      // return user and token to frontend app
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