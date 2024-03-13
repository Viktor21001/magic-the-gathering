const router = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');

const Main = require('../views/Main');
const Page404 = require('../views/Page404');

const Cards = require('../views/components/Card');

const Basket = require('../views/Basket');

const { Card } = require('../../db/models');

router.get('/', async (req, res) => {
  const { login } = req.session;
  try {
    const cards = await Card.findAll(); //! Карточки из БД
    renderTemplate(Main, { login, cards }, res);
  } catch (error) {
    console.log('Ошибка на сервере', error);
    renderTemplate(Page404, {}, res); //! так как тута есть страничка 404, будем ее рендерить при ошибке
  }
});

router.get('/404', async (req, res) => {
  renderTemplate(Page404, {}, res);
});

router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('cooks');
    res.redirect('/');
  });
});

router.get('/basket', async (req, res) => {
  const { login } = req.session;
  try {
    renderTemplate(Basket, {login}, res);
  } catch (error) {
    console.log('Ошибка на сервере', error);
  }
});

module.exports = router;
