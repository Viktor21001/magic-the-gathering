const router = require('express').Router();

const { User, Card, Basket } = require('../../db/models');

// const renderTemplate = require('../lib/renderTemplate');

router.delete('/:id', async (req, res) => {
  const { userId } = req.session;
  const { id } = req.params;

  try {
    const user = await User.findByPk(userId);
    const basket = await Basket.findByPk(id);
    console.log('🚀 ~ router.delete :', basket);
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

router.post('/new', async (req, res) => {
  const { userId } = req.session;
  const { companyName, number } = req.body;

  const phoneRegex = /^\+?\d{1,3}\s?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;

  // эх, надо было сразу required ставить , а не писать такие проверки тут...
  if (!companyName) {
    res.status(400).json({ err: 'Укажите имя компании!' });
  } else if (!number) {
    res.status(400).json({ err: 'Укажите номер компании!' });
    // не успеваю, ааа
    // } else if (!phoneRegex.test(number)) {
    //   res.status(400).json({ err: 'Укажите коректный номер компании!' })
  } else {
    try {
      const user = await User.findByPk(userId);
      // да и эта защита излшня так то.
      if (user) {
        try {
          const company = await Company.create({
            companyName,
            number,
            userId,
          });
          console.log(res);
          res.status(200).json({ msg: 'Компания успешно создана!' });
        } catch (error) {
          console.log(error);
          res.status(400).json({ err: 'Ошибка при создании компании!' });
        }
      } else {
        res.status(404).json({ err: 'Такого пользователя не существует!' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ err: 'Внутренняя ошибка сервера!' });
    }
  }
});

//!   ---------- !!!!!!!!!!!! БОЕВОЙ-------------------!!!!!!!
// orderRouter.post('/:id', async (req, res) => {
//   const { userId } = req.session;
//   const { id } = req.params;
//   if (userId) {
//     try {
//       const user = await User.findByPk(userId);
//       const card = await Card.findByPk(id);
//       console.log(user.id, card.id);
//       if (user && card) {
//         const basket = await Basket.findOne({
//           where: { userId: user.id, cardId: card.id },
//         });
//         if (!basket) {
//           await Basket.create({
//             userId: user.id,
//             cardId: card.id,
//           });
//           res.json({ msg: 'Добавлено в корзину!' });
//         } else {
//           res.json({ err: 'Товар закончился!' });
//         }
//       } else {
//         res.json({ err: 'Такого пользователя или товара не существует!' });
//       }
//     } catch (error) {
//       console.log(error);
//       res.json({ err: 'Внутренняя ошибка сервера!' });
//     }
//   } else {
//     res.json({ err: 'У вас нет прав на заказ товара!' });
//   }
// });

// // БОЕВОЙ
// orderRouter.delete('/:id', async (req, res) => {
//   const { userId } = req.session;
//   const { id } = req.params;
//   if (userId) {
//     try {
//       const user = await User.findByPk(userId);
//       const basket = await Basket.findByPk(id);
//       const card = await Card.findByPk(basket.cardId);
//       if (user && basket && card) {
//         if (user.id === basket.userId) {
//           await basket.destroy();
//           res.json({ msg: 'Карточка удалена с корзины!' });
//         } else {
//           res.json({ err: 'Вы не владелец!' });
//         }
//       } else {
//         res.json({ err: 'Такого пользователя или карточки не существует!' });
//       }
//     } catch (error) {
//       console.log(error);
//       res.json({ err: 'Внутренняя ошибка сервера!' });
//     }
//   } else {
//     res.json({ err: 'У вас нет прав на удаление!' });
//   }
// });

module.exports = router;
