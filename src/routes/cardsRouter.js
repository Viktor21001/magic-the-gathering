const router = require('express').Router();

const { Op } = require('sequelize');
const Main = require('../views/Main');
const renderTemplate = require('../lib/renderTemplate');
const upload = require('../lib/multerUpload');

const { User, Card } = require('../../db/models');

router.post('/new', upload.single('cardImg'), async (req, res) => {
  const imgPath = `/media/input/${req.file.originalname}`;
  const { userId, login} = req.session;
  const {
    cardName, cardPrice, wear,
  } = req.body;
  console.log(req.file);
  try {
    const newCard = await Card.create({
      cardName,
      cardPrice,
      wear,
      cardImg: imgPath,
      seller: userId,
    });
    const user = await User.findByPk(userId);
    res.redirect(`/user/${login}`);
  } catch (error) {
    console.log('Ошибка создания карточки', error);
    res.sendStatus(500);
  }
});

router.get('/', async (req, res) => {
  try {
    const cards = await Card.findAll();
    res.json(cards);
  } catch (error) {
    console.log('Ошибка получения карточек', error);
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

router.get('/city/:city', async (req, res) => {
  const { city } = req.params;
  const { login } = req.session;
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
    renderTemplate(Main, { login, cards: cardInCity }, res);
    // res.json(cardInCity);
  } catch (error) {
    console.log('Ошибка поиска карточек по городу карточки', error);
    res.sendStatus(500);
  }
});

router.get('/title/:string', async (req, res) => {
  const { string } = req.params;
  const { login } = req.session;
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
    renderTemplate(Main, { login, cards: cardWithName }, res);
    // res.json(cardWithName);
  } catch (error) {
    console.log('Ошибка поиска карточек по городу карточки', error);
    res.sendStatus(500);
  }
});

module.exports = router;
