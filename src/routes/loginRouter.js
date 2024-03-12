const router = require('express').Router();
const bcrypt = require('bcrypt');
const renderTemplate = require('../lib/renderTemplate');
const LoginPage = require('../views/LoginPage');
const { User } = require('../../db/models');

router.get('/', (req, res) => {
  renderTemplate(LoginPage, null, res);
});

router.post('/', async (req, res) => {
  try {
    const { login, password } = req.body;
    const user = await User.findOne({ where: { login } });
    if (!user) {
      res.json({ notFound: 'Пользователь не найден' });
    } else {
      const checkPass = await bcrypt.compare(password, user.password);
      if (checkPass) {
        // req.session.userId = user.id;
        req.session.login = user.login;
        req.session.save(() => {
          console.log('Сессия сохранена');
          res.json({ logDone: 'Пользователь вернулся' });
        });
      } else {
        res.json({ errPass: 'Неверный пароль' });
      }
    }
  } catch (error) {
    console.error('Ошибка входа:', error);
    res.json({ error: 'Ошибка сервера' });
  }
});

module.exports = router;
