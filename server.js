const fs = require('fs');
const express = require('express');
const apiroutes = require('./routes/apiroutes')
const htmlroutes = require('./routes/htmlroutes');

const PORT = process.env.PORT || 3001;
const app = express();

