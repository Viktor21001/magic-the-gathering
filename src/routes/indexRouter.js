const router = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');

const Main = require('../views/Main');
const Page404 = require('../views/Page404');

// const CardPage = require('../views/components/Card');

const BasketPage = require('../views/Basket');

const { User, Card, Basket } = require('../../db/models');

router.get('/', async (req, res) => {
  const { login } = req.session;
  try {
    const cards = await Card.findAll({
      include: [
        {
          model: User,
          attributes: ['city'],
        },
      ],
    });
    renderTemplate(Main, { login, cards }, res);
  } catch (error) {
    console.log('Ошибка на сервере', error);
    renderTemplate(Page404, {}, res);
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
