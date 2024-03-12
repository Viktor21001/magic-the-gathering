const router = require('express').Router();
const bcrypt = require('bcrypt');
const renderTemplate = require('../lib/renderTemplate');
const RegPage = require('../views/RegPage');
const { User } = require('../../db/models');

router.get('/', (req, res) => {
  renderTemplate(RegPage, null, res);
});

router.post('/', async (req, res) => {
  try {
    const {
      login, email, city, password,
    } = req.body;
    const user = await User.findOne({ where: { login } });
    if (user) {
      res.json({
        err: 'Пользователь с таким логином или почтой уже существует',
      });
    } else {
      const hash = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        login, email, city, password: hash,
      });
      req.session.login = newUser.login;
      // req.session.userId = newUser.id;
      req.session.save(() => {
        res.json({ regDone: 'Регистрация прошла успешно', id: newUser.id });
      });
    }
  } catch (error) {
    res.json({ error: 'Ошибка сервера' });
  }
});

module.exports = router;
