require('dotenv').config();
const express = require('express');
const bp = require('body-parser');
const mongoose = require('mongoose');
const expressJWT = require('express-jwt');

const app = express();
var port = process.env.PORT || 3001;

app.use(bp.json()); // this line lets us accept POST data from axios
app.use(bp.urlencoded({extended: false}));

app.use(express.static(__dirname + '/client/build'));

var server = app.listen(port, () => {
  console.log('\x1b[36m%s\x1b[0m', `* * *  running on ${port}  * * *`)
})

module.exports = server;
