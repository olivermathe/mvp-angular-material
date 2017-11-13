const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const router = express.Router();
const render = require('ejs').renderFile;

const app = express();

app.engine('html', render);
app.set('views', __dirname);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'node_modules')));

router.get('/', (req, res, next) => res.render('index'));
app.use('/', router);

app.use((req, res, next) => res.render('404'));

module.exports = app;