const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { log } = require('console');
const renderTemplate = require('../lib/renderTemplate');
const RegPage = require('../views/RegPage');
const { User } = require('../../db/models');
const generateJwt = require('../lib/jwtUtils');

router.get('/', async (req, res) => {
  try {
    // const cities = [{ name: 'Москва' }, { name: 'Архангельск' }, { name: 'Питер' }, { name: 'Батуми' }, { name: 'Иваново' }];
    // const response = await fetch('https://kladr-api.ru/api.php?query=А&contentType=city&withParent=1&limit=10');
    // const cities = await response.json();
    // console.log(cities.result);
    // renderTemplate(RegPage, { cities: cities.result }, res);
    renderTemplate(RegPage, {}, res);
  } catch (error) {
    res.status(500);
  }
});

router.post('/', async (req, res) => {
  try {
    const { login, email, city, password } = req.body;
    const user = await User.findOne({ where: { login } });
    if (user) {
      res.json({
        err: 'Пользователь с таким логином или почтой уже существует',
      });
    } else {
      const hash = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        login,
        email,
        city,
        password: hash,
      });
      req.session.login = newUser.login;
      req.session.userId = newUser.id;
      req.session.email = newUser.email;
      req.session.city = newUser.city;
      //! Генерация токена для нового пользователя
      const token = generateJwt(
        newUser.id,
        newUser.login,
        newUser.email,
        newUser.city,
      );
      console.log('Это JWT токен ===>', token);
      req.session.save(() => {
        res.json({
          regDone: 'Регистрация прошла успешно',
          id: newUser.id,
          token,
        });
      });
    }
  } catch (error) {
    res.json({ error: 'Ошибка сервера' });
  }
});

router.get('/:str', async (req, res) => {
  const { str } = req.params;
  try {
    const response = await fetch(
      `https://kladr-api.ru/api.php?query=${str}&contentType=city&withParent=1&limit=10`,
    );
    const result = await response.json();
    res.json(result.result);
  } catch (error) {
    res.json({ error: 'Ошибка сервера' });
  }
});

module.exports = router;
