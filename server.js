const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const router = express.Router();
const render = require('ejs').renderFile;

const app = express();

app.engine('html', render);
app.set('views', __dirname);
app.set('view engine', 'html');

app.use(express.static('node_modules'));
app.use(express.static('dist'));
app.use(express.static('assets'));
app.use(express.static('app'));

router.get('/', (req, res, next) => res.render('index'));

app.use('/', router);

module.exports = app;