const orderRouter = require('express').Router();
const { User, Item, Bet } = require('../../db/models');

// БОЕВОЙ
orderRouter.post('/:id', async (req, res) => {
  const { login, userId, role } = req.session;
  const { id } = req.params;
  if (userId) {
    try {
      const user = await User.findByPk(userId);
      const item = await Item.findByPk(id);
      console.log(user.id, item.id);
      if (user && item) {
        const userOrder = await UserOrder.findOne({ where: { orderUserId: user.id, orderItemId: item.id } });
        if (userOrder) {
          if (item.itemQuantity > 0) {
            item.itemQuantity -= 1;
            userOrder.orderItemQuantity += 1;
            await item.save();
            await userOrder.save();
            res.json({ msg: 'Добавлено!' });
          } else {
            res.json({ err: 'Товар закончился!' });
          }
        } else if (item.itemQuantity > 0) {
          await UserOrder.create({
            orderUserId: user.id,
            orderItemId: item.id,
            orderItemQuantity: 1,
          });
          item.itemQuantity -= 1;
          await item.save();
          res.json({ msg: 'Добавлено!' });
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

// БОЕВЕЙШИЙ, БУДЬ ПРОКЛЯТ ЭТОТ 6ОЙ РЕЛИЗ
orderRouter.put('/:id', async (req, res) => {
  const { login, userId, role } = req.session;
  const { id } = req.params;
  const userOrderQuantity = +req.body.userOrderQuantity;
  if (userId) {
    try {
      const userOrder = await UserOrder.findOne({
        where: { id },
        include: {
          model: Item,
          attributes: ['itemQuantity'],
        },
      });
      const item = await Item.findByPk(userOrder.orderItemId);
      if (userOrder) {
        if (typeof userOrderQuantity !== 'number' || userOrderQuantity <= 0) {
          res.json({ err: { orderItemQuantity: 'Пожалуйста, введите нормальное число!' } });
        } else if (userOrder.Item.itemQuantity === 0 && userOrderQuantity === userOrder.orderItemQuantity) {
          res.json({ err: { orderItemQuantity: 'Вы уже смели все что было!' } });
        } else if (userOrderQuantity < userOrder.orderItemQuantity) {
          item.itemQuantity += userOrder.orderItemQuantity - userOrderQuantity;
          await item.save();
          userOrder.orderItemQuantity = userOrderQuantity;
          await userOrder.save();
          res.json({ msg: 'Заказ обновлен!', data: { itemQuantity: item.itemQuantity } });
        } else if (userOrder.Item.itemQuantity + userOrder.orderItemQuantity < userOrderQuantity) {
          res.json({ err: { orderItemQuantity: 'Вы не можете заказать больше чем есть у поставщика!' } });
        } else {
          item.itemQuantity = userOrder.Item.itemQuantity + userOrder.orderItemQuantity - userOrderQuantity;
          await item.save();
          userOrder.orderItemQuantity = userOrderQuantity;
          await userOrder.save();
          res.json({ msg: 'Заказ обновлен!', data: { itemQuantity: item.itemQuantity } });
        }
      } else {
        res.json({ err: 'Такого заказа не существует.' });
      }
    } catch (error) {
      console.log(error);
      res.json({ err: 'Внутренняя ошибка сервера!' });
    }
  } else {
    res.json({ err: 'У вас нет прав на обновление заказа!' });
  }
});

// БОЕВОЙ
orderRouter.delete('/:id', async (req, res) => {
  const { login, userId, role } = req.session;
  const { id } = req.params;
  if (userId) {
    try {
      const user = await User.findByPk(userId);
      const userOrder = await UserOrder.findByPk(id);
      const item = await Item.findByPk(userOrder.orderItemId);
      if (user && userOrder && item) {
        if (user.id === userOrder.orderUserId) {
          console.log(userOrder.orderItemQuantity);
          console.log(item.itemQuantity + userOrder.orderItemQuantity);
          item.itemQuantity += userOrder.orderItemQuantity;
          await item.save();
          await userOrder.destroy();
          res.json({ msg: 'Сущность удалена!' });
        } else {
          res.json({ err: 'Вы не владелец этой сущности!' });
        }
      } else {
        res.json({ err: 'Такого пользователя или сущности не существует!' });
      }
    } catch (error) {
      console.log(error);
      res.json({ err: 'Внутренняя ошибка сервера!' });
    }
  } else {
    res.json({ err: 'У вас нет прав на удаление сущности!' });
  }
});

module.exports = orderRouter;
