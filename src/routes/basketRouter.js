const orderRouter = require('express').Router();
const { User, Card, Basket } = require('../../db/models');

// БОЕВОЙ
orderRouter.post('/:id', async (req, res) => {
  const { userId } = req.session;
  const { id } = req.params;
  if (userId) {
    try {
      const user = await User.findByPk(userId);
      const card = await Card.findByPk(id);
      console.log(user.id, card.id);
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

// БОЕВОЙ
orderRouter.delete('/:id', async (req, res) => {
  const { userId } = req.session;
  const { id } = req.params;
  if (userId) {
    try {
      const user = await User.findByPk(userId);
      const basket = await Basket.findByPk(id);
      const card = await Card.findByPk(basket.cardId);
      if (user && basket && card) {
        if (user.id === basket.userId) {
          await basket.destroy();
          res.json({ msg: 'Карточка удалена с корзины!' });
        } else {
          res.json({ err: 'Вы не владелец!' });
        }
      } else {
        res.json({ err: 'Такого пользователя или карточки не существует!' });
      }
    } catch (error) {
      console.log(error);
      res.json({ err: 'Внутренняя ошибка сервера!' });
    }
  } else {
    res.json({ err: 'У вас нет прав на удаление!' });
  }
});

module.exports = orderRouter;

// const cardRaw = await Card.findOne(); //! Карточки из БД
// const card = cardRaw.get({ plain: true });
// const cardsRaw = await Card.findAll(); //! Карточки из БД
// const cards = cardsRaw.map((card) => card.get({ plain: true }));
