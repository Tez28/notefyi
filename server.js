const fs = require('fs');
const express = require('express');
const apiroutes = require('./routes/apiroutes')
const htmlroutes = require('./routes/htmlroutes');

const PORT = process.env.PORT || 3001;
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

