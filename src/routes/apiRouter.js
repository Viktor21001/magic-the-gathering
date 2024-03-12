const router = require('express').Router();
const indexRouter = require('./indexRouter');
const loginRouter = require('./loginRouter');
const regRouter = require('./regRouter');
// const postsRouter = require('./postsRouter');
// const userRouter = require('./userRouter');
// const removeRouter = require('./removeRouter');
const orderRouter = require('./orderRouter');

const { secureRoute, checkUser } = require('../middlewares/common');

module.exports = router
  .use('/', indexRouter)
  .use('/login', secureRoute, loginRouter)
  .use('/reg', secureRoute, regRouter)
  .use('/', orderRouter )
  // .use('/posts', checkUser, postsRouter)
  // .use('/user', checkUser, userRouter)
  // .use('/remove', checkUser, removeRouter);
