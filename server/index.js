'use strict';
const express = require('express');
const app = express();

// logging
const morgan = require('morgan');
app.use(morgan('dev'));

// body parsing middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//set up api routes
app.use('/api', require('./api'));

//send index.html
const path = require('path');
app.use(express.static('public'))
app.use('*', (req, res, next) =>
  res.sendFile(path.join(__dirname, '..', 'public/index.html'))
)

//sync database and listen
const PORT = process.env.PORT || 3000;
const { db } = require('./db');

db.sync()
  .then(() => {
  	app.listen(PORT, (req,res)=> {
  		console.log(`listening on ${PORT}`)
  	})
  });
