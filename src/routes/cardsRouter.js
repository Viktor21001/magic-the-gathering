const router = require('express').Router();

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

module.exports = router;
