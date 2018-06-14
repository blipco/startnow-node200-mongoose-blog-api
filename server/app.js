const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect(mongodb://blipco:dabomb@ds259820.mlab.com:59820/heroku_9gnrqds8);

mongoose.Promise = Promise;

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send();
});
app.use('/api/users', require('./routes/users'));

app.use('/api/blogs', require('./routes/blogs'));


module.exports = app;