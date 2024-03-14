const router = require('express').Router();

const { Op } = require('sequelize');
const Main = require('../views/Main');
const renderTemplate = require('../lib/renderTemplate');

const { User, Card } = require('../../db/models');

router.post('/new', async (req, res) => {
  const { userId } = req.session;
  const {
    cardName, cardPrice, wear, cardImg,
  } = req.body;
  try {
    const newCard = await Card.create({
      cardName,
      cardPrice,
      wear,
      cardImg,
      seller: userId,
    });
    const user = await User.findByPk(userId);
    res.json({ newCard, user });
  } catch (error) {
    console.log('Ошибка создания карточки', error);
    res.sendStatus(500);
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const card = await Card.findByPk(id);
    res.json(card);
  } catch (error) {
    console.log('Ошибка получения карточки', error);
    res.sendStatus(500);
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const {
    cardName, cardPrice, wear, cardImg,
  } = req.body;
  try {
    const cardUpdate = await Card.update({
      cardName,
      cardPrice,
      wear,
      cardImg,
    }, {
      where: {
        id,
      },
    });
    if (cardUpdate) {
      const card = await Card.findByPk(id);
      res.json(card);
    }
  } catch (error) {
    console.log('Ошибка обновления карточки', error);
    res.sendStatus(500);
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const cardDelete = await Card.destroy({
      where: {
        id,
      },
    });
    if (cardDelete) {
      res.sendStatus(200);
    }
  } catch (error) {
    console.log('Ошибка удаления карточки', error);
    res.sendStatus(500);
  }
});

router.get('/title/:string', async (req, res) => {
  const { string } = req.params;
  // const { login } = req.session;
  try {
    const cardWithName = await Card.findAll({
      where: {
        cardName: {
          [Op.like]: `%${string}%`,
        },
      },
      include: [
        {
          model: User,
          attributes: ['city'],
        },
      ],
    });
    if (cardWithName) {
      res.json(cardWithName);
    }
  } catch (error) {
    console.log('Ошибка поиска карточек по городу карточки', error);
    res.sendStatus(500);
  }
});

router.get('/cities/:city', async (req, res) => {
  const { city } = req.params;
  try {
    const cardInCity = await Card.findAll({
      include: [
        {
          model: User,
          attributes: ['city'],
          where: { city },
        },
      ],
    });
    console.log(cardInCity);
    res.json(cardInCity);
  } catch (error) {
    console.log('Ошибка поиска карточек по городу карточки', error);
    res.sendStatus(500);
  }
});

module.exports = router;
