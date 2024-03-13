const router = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');

const Main = require('../views/Main');
const Page404 = require('../views/Page404');

const CardPage = require('../views/components/Card');

const BasketPage = require('../views/BasketPage');

const { Card, Basket } = require('../../db/models');

router.get('/', async (req, res) => {
  const { login } = req.session;
  try {
    const cardsRaw = await Card.findAll(); //! Карточки из БД
    const cards = cardsRaw.map((card) => card.get({ plain: true }));

    // const cardRaw = await Card.findOne(); //! Карточки из БД
    // const card = cardRaw.get({ plain: true });

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
    const basketRaw = await Basket.findAll();
    const baskets = basketRaw.map((bask) => bask.get({ plain: true }));
    renderTemplate(BasketPage, { login, baskets }, res);
  } catch (error) {
    console.log('Ошибка на сервере', error);
  }
});

module.exports = router;
