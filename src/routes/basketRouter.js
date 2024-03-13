const router = require('express').Router();

const { User, Card, Basket } = require('../../db/models');

// const renderTemplate = require('../lib/renderTemplate');

router.delete('/:id', async (req, res) => {
  const { userId } = req.session;
  const { id } = req.params;

  try {
    const user = await User.findByPk(userId);
    const basket = await Basket.findByPk(id);
    if (!user) {
      res.status(404).json({ err: 'Такого пользователя не существует!' });
    } else if (!basket) {
      res.status(404).json({ err: 'Такой карточки не существует!' });
    } else if (user.id === basket.userId) {
      await basket.destroy();
      res.status(200).json({ msg: 'Карточка удалена из корзины!' });
    } else {
      res.status(403).json({ err: 'Вы не владелец этой записи!' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ err: 'Внутренняя ошибка сервера!' });
  }
});

//!   ---------- !!!!!!!!!!!!-------------------!!!!!!!
router.post('/:id', async (req, res) => {
  const { userId } = req.session;
  const { id } = req.params;
  if (userId) {
    try {
      const user = await User.findByPk(userId);
      const card = await Card.findByPk(id);
      // console.log(user.id, card.id);
      if (user && card) {
        const basket = await Basket.findOne({
          where: { userId: user.id, cardId: card.id },
        });
        if (!basket) {
          await Basket.create({
            userId: user.id,
            cardId: card.id,
          });
          res.json({ msg: 'Добавлено в корзину!' });
        } else {
          res.json({ err: 'Товар закончился!' });
        }
      } else {
        res.json({ err: 'Такого пользователя или товара не существует!' });
      }
    } catch (error) {
      console.log(error);
      res.json({ err: 'Внутренняя ошибка сервера!' });
    }
  } else {
    res.json({ err: 'У вас нет прав на заказ товара!' });
  }
});

module.exports = router;
