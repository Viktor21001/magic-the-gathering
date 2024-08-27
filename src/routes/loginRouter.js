const router = require('express').Router();
const bcrypt = require('bcrypt');
const renderTemplate = require('../lib/renderTemplate');
const LoginPage = require('../views/LoginPage');
const { User } = require('../../db/models');
const generateJwt = require('../lib/jwtUtils');

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
        req.session.userId = user.id;
        req.session.login = user.login;

        const token = generateJwt(user.id, user.login, user.email, user.city);
        console.log('Это новый JWT токен ===>', token);
        res.cookie('token', token, {
          httpOnly: true, // Флаг httpOnly делает cookie недоступным для клиентских JavaScript скриптов (для безопасности)
          maxAge: 24 * 60 * 60 * 1000, // Срок жизни cookie - 24 часа
        });
        req.session.save(() => {
          console.log('Сессия сохранена');
          res.json({ logDone: 'Пользователь вернулся', token });
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
