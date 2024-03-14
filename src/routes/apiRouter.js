const router = require('express').Router();
const indexRouter = require('./indexRouter');
const loginRouter = require('./loginRouter');
const regRouter = require('./regRouter');
const cardsRouter = require('./cardsRouter');
const basketRouter = require('./basketRouter');

const { secureRoute, checkUser } = require('../middlewares/common');

module.exports = router
  .use('/', indexRouter)
  .use('/login', secureRoute, loginRouter)
  .use('/reg', secureRoute, regRouter)
  .use('/cards', checkUser, cardsRouter)
  .use('/basket', checkUser, basketRouter);
