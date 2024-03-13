require('@babel/register');
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const path = require('path');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const cookieParser = require('cookie-parser');
const dbConnectionCheck = require('../db/dbConnectCheck');
const apiRouter = require('./routes/apiRouter');

const app = express();
app.use(cookieParser());
const { PORT } = process.env;

const sessionConfig = {
  name: 'cooks',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET_KEY,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 30,
    httpOnly: true,
  },
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(process.cwd(), 'public')));
app.use(session(sessionConfig));
dbConnectionCheck();

app.use('/', apiRouter);

app.get('/*', (req, res) => {
  res.redirect('/404');
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
