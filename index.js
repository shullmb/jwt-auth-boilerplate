require('dotenv').config();
const express = require('express');
const bp = require('body-parser');
const mongoose = require('mongoose');
const expressJWT = require('express-jwt');
const auth = require('./routes/auth');
const locked = require('./routes/locked');

const app = express();
var port = process.env.PORT || 3001;

app.use(bp.json()); // this line lets us accept POST data from axios
app.use(bp.urlencoded({extended: false}));

mongoose.connect('mongodb://localhost/jwtAuth');

app.use(express.static(__dirname + '/client/build'));

app.use('/auth', auth);
app.use('/locked', expressJWT({ secret: process.env.JWT_SECRET }).unless({ method: 'POST' }), locked);

app.get('*', (req,res) => {
  res.sendFile(__dirname + "/client/build/index.html");
})

var server = app.listen(port, () => {
  console.log('\x1b[36m%s\x1b[0m', `* * *  running on ${port}  * * *`)
})

module.exports = server;
