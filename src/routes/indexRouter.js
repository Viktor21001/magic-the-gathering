const router = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');

const Main = require('../views/Main');
const Page404 = require('../views/Page404');

const BasketPage = require('../views/Basket');

const UserPage = require('../views/UserPage');

const { Card, User, Basket } = require('../../db/models');

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
    const cardsRaw = await Card.findAll({
      include: [
        {
          model: User,
          attributes: ['city'],
        },
      ],
    });
    const cards = cardsRaw.map((card) => card.get({ plain: true }));
    const basketRaw = await Basket.findAll();
    const baskets = basketRaw.map((bask) => bask.get({ plain: true }));
    // console.log('🚀 ~ router.get ~ baskets:', baskets);

    renderTemplate(BasketPage, { login, baskets, cards }, res);
  } catch (error) {
    console.log('Ошибка на сервере', error);
  }
});

router.get('/user/:login', async (req, res) => {
  const { login, userId } = req.session;
  try {
    const userCards = await Card.findAll({
      where: { seller: userId },
      include: [
        {
          model: User,
          attributes: ['city'],
        },
      ],
    });
    renderTemplate(UserPage, { login, userCards }, res);
  } catch (error) {
    console.log('Ошибка на сервере', error);
  }
});

module.exports = router;
