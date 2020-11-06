const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const init = require('./controllers/doStuffIDK');

const app = express();

// set the view folder path, set the templating engine
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// init stuff
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', init.init);

module.exports = app;
